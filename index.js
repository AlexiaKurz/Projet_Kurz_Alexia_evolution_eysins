// Initialisation de la carte avec une vue centrée et zoomée
var mymap = L.map('map').setView([46.3809, 6.2065], 14);

// Limitation de la carte à XXX
mymap.setMaxBounds([[46.30, 6.10], [46.40, 6.30]]);
mymap.setMinZoom(10);

// Définition des fonds de carte
var osmLayer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
});

var esriImagery = L.tileLayer(
  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="http://www.esri.com">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }
);

osmLayer.addTo(mymap);

// Affichage des coordonnées lorsque la souris survole la carte
var coordsDiv = document.getElementById('coords');

mymap.on('mousemove', function (e) {
  var coord = e.latlng;
  coordsDiv.innerText = 'Coordonnées : ' + coord.lat.toFixed(5) + ' / ' + coord.lng.toFixed(5);
});

// Récupération du lien "Accueil" par son ID
var accueilLink = document.getElementById('accueil-link');

// Ajout d'un gestionnaire d'événements pour le clic sur le lien "Accueil"
accueilLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'index.html';
});

// Création des boutons pour changer les fonds de carte
var baseLayers = {
  "OpenStreetMap": osmLayer,
  "Photos aériennes ESRI": esriImagery
};
var overlays = {};
L.control.layers(baseLayers, overlays).addTo(mymap);


// Mise à jour du curseur de la barre slide et des infos associées
function updateSlider(year) {
  document.getElementById('yearSlider').value = year;
  document.getElementById('slider_value').innerText = year;
  toggleYear(year); //permet d'activer le changement en fonction de l'année
  infoBox2.update(data_eysins, year); // mise à jour des infos en fonction de l'évolution de la populatione et du bâti
}

function toggleBuildingByYear() {
  var year = document.getElementById('yearSlider').value;
  updateSlider(year);
}

// Permet de gérer les données en fonction de l'année et de donner des conditions
function toggleYear(year) {
  var data;
  if (parseInt(year) < 1990) {
    data = null;
    infoBox3.update('Données indisponibles')
  }

  if (parseInt(year) >= 1990) {
    data = BAT_Eysins1990;
    infoBox3.update('Couche année 1990')
  }

  if (parseInt(year) >= 2000) {
    data = BAT_Eysins2000;
    infoBox3.update('Couche année 2000')
  }

  if (parseInt(year) >= 2010) {
    data = BAT_Eysins2010;
    infoBox3.update('Couche année 2010')
  }

  if (parseInt(year) >= 2021) {
    data = BAT_Eysins2021;
    infoBox3.update('Couche année 2021')
  }

  geojsonLayer.clearLayers();

// Permet d'afficher les données si elles sont disponibles
  if (data) {
    geojsonLayer.addData(data);
  }
}

// Création d'une nouvelle couche pour afficher les données
var geojsonLayer = new L.geoJSON(null, {
  style: function (feature) {
    return { color: 'red', weight: 1 };
  }
});
geojsonLayer.addTo(mymap);

// Création de l'infobox pour afficher les informations sur la commune
var infoBox = L.control();
infoBox.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

infoBox.update = function (props) {
  this._div.innerHTML = '<h4>Informations générales</h4>' + (props ?
    '<b>Commune: </b>' + props.NAME + '<br />' +
    '<b>NPA: </b>' + props.NPA + '<br />' +
    '<b>Canton: </b>' + props.KANTON + '<br />' +
    '<b>District: </b>' + props.BEZIRK + '<br />' +
    '<b>N°OFS: </b>' + props.BFS_NUMMER + '<br />'  :
    'Cliquez sur une commune');
};

infoBox.addTo(mymap);

// Création de la commune sur la carte
var commune = L.geoJSON(CommuneEysins, {
  style: function (feature) {
    return { color: 'green', weight: 1 };
  },
  onEachFeature: function (feature, layer) {
    var properties = feature.properties;
    layer.bindTooltip(properties.NAME).openTooltip();
    layer.on('click', function (e) {
      var html = "<h4>Informations</h4>"
      infoBox.update(html);
      infoBox._div.style.right = '10px';
      zoomSurCommuneEtInfo(properties);
    });
  }
}).addTo(mymap);

commune.on('click', function (event) {
  mymap.fitBounds(event.target.getBounds());
});

function zoomSurCommuneEtInfo(properties) {
  mymap.fitBounds(commune.getBounds());
  infoBox.update(properties);
  infoBox._div.style.right = '10px';
}

// Création de l'infobox avec infos densité, population, année
var infoBox2 = L.control();
infoBox2.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this._div.innerHTML = '<p style="text-align: justify;">Cliquez sur "Evolution du bâti et de la densité de la population" pour avoir des informations complémentaires</p>';
  return this._div;
};

infoBox2.update = function (density, year) {
  for (i = 0; i < 80; i++) {
    if (parseInt(density.features[i].properties.Annee) == parseInt(year)) {
      break;
    }
  }

  var population = density.features[i].properties.Population;
  var densite = density.features[i].properties.Densite;

// Pour les données indisponibles, soit en null dans le fichier, un message apparait. 
  this._div.innerHTML = '<h4>Densité de la population</h4>' +
    '<b>Année: </b>' + density.features[i].properties.Annee + '<br />' +
    '<b>Population: </b>' + (population ? population : 'Données indisponibles') + '<br />' +
    '<b>Superficie [km²]: </b>' + density.features[i].properties.Superficie + '<br />' +
    '<b>Densité [hab/km²]: </b>' + (densite ? densite : 'Données indisponibles') + '<br />';
};

infoBox2.addTo(mymap);

// Création de l'infobox couche bâtiment disponible
var infoBox3 = L.control();
infoBox3.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  return this._div;
};

infoBox3.update = function (year) {
  this._div.innerHTML = '<h4>Infos : couches bâti</h4>' +
    '<b>Année: </b>' + year + '<br />';
};

infoBox3.addTo(mymap);
