# Visualisation de l'évolution du bâti et de la densité de la popuplation de la commune d'Eysins (VD)
## Projet
Cours : Visualisation des données  
Auteure : Alexia Kurz  
Université : Université de Lausanne, semestre printemps 2024  
Master : TEM, Faculté des Géosciences et de l'Environnement

**Projet :** Visualisation de l'évolution du bâti et de la densité de la population de la commune d'Eysins (VD)

## Données

Les données des bâtiments proviennent de l’Office fédéral de la topographie swisstopo, ce qui correspond au centre national de la géoinformation et les données sont accessibles à tous gratuitement en téléchargement.

Afin d’obtenir des informations sur les bâtiments, les données ont été téléchargées via swissBUILDINGS3D (swisstopo, s.d.), lequel fait appel à des bandes de photos aériennes numériques et les toits sont saisis par photogrammétrie puis complétés par d’autres informations. Ce fichier se compose d’une couche thématique avec la forme des toits des bâtiments et opère à une précision de ±30cm à 50cm en planimétrie et en altimétrie.

Mon choix s’est porté sur ces données, car les données des bâtiments correspondent à l’état des informations visibles sur les photos aériennes de swisstopo les plus récentes. Cependant, les bâtiments isolés doivent avoir une dimension minimale de 8m x 3m. Les constructions ayant des dimensions inférieures en zone rurale peuvent tout de même être prises en compte dans certains cas. 

Les données prises par des photos satellites sont mises à jour régulièrement, permettant d’avoir des informations fiables et complètes.
Cependant, il est toujours possible de rencontrer des biais lors de la collecte, la saisie ou la mise à jour du jeux de données et il est donc nécessaire d’opérer à des vérifications. En effet, il est possible que les données ne reflètent pas de manière précise l’évolution du bâti car des erreurs ou des informations manquantes se sont glissées dans les données. Cela a notamment été le cas pour la couche des années 1980 qui a dû être modifiée en utilisant geo.map.admin et sa fonction de cartes temporelles afin de redessiner les bâtiments présents à cette époque afin de compléter les informations. Cependant, il est également possible que les données les plus récentes ne soient pas encore disponibles et donc ne peuvent pas être visualisées sur la carte. 

En ce qui concerne les données sur la population et la densité d’habitant par km² proviennent des statistiques cantonales de Vaud. Les données provenant de « Population résidente permanente des communes, Vaud, 1950-1980-aujourd’hui » (État de Vaud, s. d.)  permettent d’obtenir les informations quant à la population résidente permanente par commune vaudoise des années 1950, 1980 et 2023. A cela s’ajoute qu’un autre tableau de données « Densité de population par district et commune, Vaud, depuis 2012 » (État de Vaud, s. d.)  permet à la fois d’obtenir la superficie de la commune, laquelle peut également être vérifiée au travers de swisstopo, mais elle permet d’obtenir le nombre d’habitants de 2012 – 2023 dans la commune d’Eysins et donne également les valeurs de la densité d’habitants par km². Les données démographiques pour la commune d’Eysins peuvent également être récupérées sur l’Office fédéral de la statistique (OFS) et ces dernières ont été comparées. 

Cependant, les données démographiques publiées par l’Office fédéral de la statistique (OFS) et celles fournies par les autorités cantonales vaudoises présentes des différences et cela peut s’expliquer par les différences méthodologiques de collectes. Dans le cas des données nécessaires pour cette carte interactive, il est plus judicieux de se référer aux statistiques vaudoises, car les données sont plus souvent mises à jour par les autorités locales et que des informations plus spécifiques à la région sont présentes sur leur portail. Les données démographiques reflètent donc mieux la réalité étant donné que les autorités cantonales sont les mieux placées afin de comprendre les spécificités locales.

Grâce à ces données, il est possible de compléter un fichier avec les données démographiques, de 1950, 1980, 2012 à 2023 en remplissant les champs de la population, la superficie et la densité, soit en divisant la population par la superficie. 

Les données démographiques ont dans un premier temps été traitées dans un fichier Excel afin d'obtenir le nombre d'habitants par année, la superficie (constante dans le cas de la commune d'Eysins) et donc la densité. Ainsi, le fichier Excel est composé de quatre colonnes. Les informations manquants sont également présentes et sont représentées en null. Ce fichier a ensuite été téléchargé sur QGIS sous format .csv afin de l'exporter en .geojson afin de pouvoir l'utiliser dans l'application sous forme de .js.

Quant aux données sur les bâtiments, l'application QGIS a également été utilisée afin d'exporter les couches en format .js. Comme cela a été mentionné, des modifications ont dû être faites sur la couche des années 1980 afin de rajouter des bâtiments sous forme de vecteurs en s'inspirant des cartes historiques geo.map.admin. Ainsi, une double vérification a été faite.

Le périmètre de la commune a également été exportée depuis swisstopo avec une multitude d'informations et la géométrie. Les données sont données en allemand et le nombre d'habitants en 2023 a été rajouté (selon les données de statistiques vaudoises), mais également le district et le canton, en reprenant le numéro de canton présent.

## Contexte de la problématique

La commune d'Eysins, située dans le district de Nyon et adjacente à la ville du même nom, a connu une croissance significative de son bâti et de sa population depuis les années 1990. Cette expansion peut être attribuée à sa position géographique stratégique au cœur du pôle économique genevois et vaudois. En 2023, la population de ce petit village rural comptait 1739 habitants. Cette croissance a été accompagnée par le développement de nouvelles infrastructures et l'arrivée de nouveaux résidents, transformant progressivement l'image de la commune (Immo-swissnews.ch, s. d. ; Planification territoriale, s. d.).

L’agglomération de Nyon, dans laquelle fait partie la commune d’Eysins, est sujette à une planification du développement spatial à moyen et long terme au travers d’un Schéma Directeur de l’Agglomération Nyonnaise (SDAN) adopté le 16 février 2006. Il s’agit d’un outil de planification stratégique qui fixe les orientations en termes d’aménagement du territoire, du développement urbain, de la mobilité, de la préservation de l’environnement ainsi que de la gestion des ressources. Le SDAN a pour objectif de coordonner les actions des différentes communes de l’agglomération dans le but de garantir un développement harmonieux et durable du territoire, en prenant en compte les besoins présents et futurs. 

Le réseau de développement urbain (RDU) est un instrument de planification et de coordination entre différents acteurs d’une agglomération et est prévu par le SDAN. Dès lors, les trois communes directement concernées sont Eysins, Nyon et Prangins. Ainsi, la commune d’Eysins fait partie du SDAN et a été identifiée comme secteur-clé du développement de par son interface entre le monde agricole et urbain (Planification territoriale, s. d.).

Une carte interactive semble être l'outil idéal pour illustrer ces changements, permettant de visualiser de manière dynamique l'évolution du tissu urbain au fil des décennies et l'évolution de la densité de la population. L'objectif est de rendre la navigation intuitive pour les utilisateurs, leur permettant d'observer les changements graduels à travers le temps. Cette approche offre une compréhension plus approfondie et contextuelle de l'évolution du bâti dans l'espace et de la densité d’habitant par km². De par cette carte, il est possible d’avoir un suivi de l’urbanisation et d’identifier les différentes tendances de développement urbain au sein de la commune et d’analyser les transformations territoriales. Ainsi, il devient visible que le village s'urbanise en direction de la ville de Nyon, apparaissant comme un prolongement urbain de celle-ci. L’analyse de ces transformations urbaines subies par la commune permet de servir d’aide à la prise de décision ou encore pour la planification urbaine. 

Quant à l’analyse des dynamiques démographiques, cela permet d’observer l’évolution de la population et de la densité par année. Cela permet également d’informer le public des transformations urbaines et donc de communiquer et de sensibiliser aux enjeux d’urbanisation. 

Quant aux champs disciplinaires impliquées dans une telle cartographie interactive, ces derniers sont multiples. En effet, dans un premier temps cette carte permet au travers de la géographie urbaine et territoriale d’étudier l’évolution de l’urbanisation et du développement territoriale de la commune d’Eysins, et d’ainsi analyser les changements dans la structure du bâti à travers le temps. Cette cartographie interactive permet également de comprendre les tendances de planification urbaine subies par cette commune. De plus, ce projet appelle à l’étude de la démographie en permettant une visualisation de l’évolution de la population de la commune et de la mettre en lien avec le développement du bâti. 

Ce projet fait également appel à la géomatique en utilisant des logiciels SIG (Systèmes d'Information Géographique) afin de collecter des données spatiales pour ensuite les analyser et les visualiser. Les outils informatiques ont permis la création de cette cartographie interactive en faisant appel à des technologies (JavaScript, HTML, CSS) afin de rendre la visualisation de ces données possibles. A cela s’ajoute que la conception de l’interface fait appel à des connaissances sur la communication et le design. En effet, il faut rendre cette interface attrayante et intuitive pour l’utilisateur. 

## Choix des visualisations

Le choix quant à la visualisation s’est fait selon plusieurs critères. Dans un premier temps, il est important de choisir une cartographie interactive afin de permettre aux utilisateurs de visualiser et de comprendre facilement l’évolution du bâti et d'obtenir les informations quant à la population et la densité de la population par km2. 

Lorsque l’utilisateur ouvre l’application, il tombe directement sur une carte avec une commune mise en évidence et une barre de navigation. Cette dernière présente plusieurs onglets : Accueil, Evolution du bâti et de la densité de la population (1950-2023), sources et contact. Cet intervalle a été choisi afin d'y faire figurer les couches du bâti disponibles et les couches de la population et de la densité de cette dernière. 

Chacun de ces onglets permet une interactivité. En effet, l’onglet « Accueil » permet de revenir à l’état initial de la page. "Evolution du bâti et de la densité de la population (1950-2023)" permet grâce à une barre de défilement d’observer le développement du bâti au sein de la commune des années et au même moment deux infoboxs apparaissent avec, dans la première, des informations quant à la densité de la population(Année, population, superficie et densité) et la deuxième affiche des informations quant aux couches des bâtiments qui apparaissent, car seules 4 couches sont disponibles. Cette animation permet de montrer l’ajout ou la transformation des bâtiments et les modifications que cela entraîne dans la structure du bâti. 

Ainsi, cela permet aux utilisateurs d’avoir une comparaison visuelle des changements du bâti d’une année à l’autre, malgré que toutes les années ne soient pas représentées et en même temps, cela lui permet de voir l'évolution de la population et de la densité d'habitants par km2.

L’onglet « Sources » renseigne sur la provenance des données, des fonds de carte et le dernier onglet « Contact » permet de contacter la créatrice de la carte en cas de questions et/ou de remarques. Les données de la personne de contact ont bien entendu été anonymisées dans le cadre de ce travail. 

En termes d’interactions, la carte est dotée de la fonction zoom afin de modifier le niveau de zoom de la carte et d’ainsi adapter le contenu afin d’éviter une surcharge des informations. La carte a également été restreinte afin d’éviter que l’utilisateur ne s’égare de la commune en question du projet. De plus, une réflexion s’est faite quant au choix des fonds de carte à sélectionner afin de les adapter à la finalité de l’application, soit à sa fonction de communication. Il est important que les fonds de carte soient simples et qu’ils permettent de faciliter la compréhension. Dès lors, les fonds de carte fournies par Leaflet, permettent une visualisation simple des informations en utilisant la couche de OpenStreetMap (OSM), tandis que la couche satellite (ESRI) permet aux utilisateurs de se rendre compte de leur environnement. Cependant, il est à noter que de légères incohérences existent entre ces deux fonds de carte et que les photos aériennes sont plus précises quant à la disposition et aux contours des bâtiments. Le géoréférencement permet également de comprendre de quelle manière le bâti s’est développé dans la commune d’Eysins, notamment dans des quartiers ou zones de la commune. 

A cela s'ajoute un message dans une boîte d’information l’invitant à cliquer sur la commune afin d’obtenir davantage d’informations. Avant de cliquer sur cette dernière, il suffit de passer avec son curseur afin de faire apparaître une bulle contenant le nom de la commun. Ce choix a été fait afin d’alléger la carte et d’inviter l’utilisateur a cliqué dessus. Une fois le clic effectué, un zoom s’opère pour se centrer davantage sur la commune et des informations apparaissent instantanément dans la boîte d’information. Cette dernière contient des informations spécifiques à la commune comme le code postal (NPA), le canton, le district et le N°OFS.

Ainsi, ce tableau de bord et cette carte interactive permettent aux utilisateurs de personnaliser leur explorations et de comprendre plus aisément et visuellement les changements à travers le temps.

## Ce que permettent de dire ces visualisations

Cette carte interactive permet de visualiser l’évolution du bâti et de la densité de la population de la commune d’Eysins des années 1950 à 2023. Ainsi, il est possible de déplacer la barre temporelle afin de voir les changements selon l’année et la disponibilité des données. De plus, il est possible de connaître un certain nombre d’informations générales sur la commune sélectionnée, ici Eysins en cliquant dessus.  Cette boîte d’information se met dynamiquement à jour en sélectionnant le commune. De ce fait, il est tout à fait envisageable d’afficher d’autres communes aux alentours en faisant apparaître des informations spécifiques dans la boîte informative. Lorsque l'on clique dessus, cela fait apparaitre des informations supplémentaires. Ce choix a été fait afin d'alléger la carte.

A cela s’ajoute que les coordonnées apparaissent en haut à droite afin de connaître l’emplacement exact de chaque bâtiment. 

## Ce qu'elles ne permettent pas de dire

Cependant, cette carte interactive ne permet pas de visualiser l’évolution du bâti aux alentours. Il serait intéressant de développer ce modèle avec les communes limitrophes et d’analyser plus précisément la superficie occupée par le bâti. Dès lors, elle n’affiche que visuellement l’évolution du bâti et la transformation des bâtiments, mais ne permet pas d’obtenir des informations statistiques quant à l’évolution de la superficie des sols construits, quant au nombre total de bâtiments ou encore leur répartition par type. 

Selon l’objectif de la carte, il aurait été également envisageable de représenter les types de bâtiments (résidentiel, commercial, industriel, etc.) afin de mettre en évidence de quelle manière la structure du bâti de la commune d’Eysins a changé au fil du temps. A cela aurait pu aussi s’ajouter les équipements et les services offerts afin de connaître leur influence sur cette évolution. Or, cette application interactive cherche à rendre facilement visible l’évolution du bâti, l'évolution de la population et l’impact sur la densité d’habitant par km².

## Remerciements
Je tiens à remercie M. Isaac Pante et Loris Rimaz pour le cours de "Visualisation de données", cours de Master de l'Université de Lausanne, dispensé lors du semestre de printemps 2024, ainsi que pour leurs précieux conseils.

## Bibliographie
* Etat et structure de la population | État de Vaud. (s. d.). Consulté 9 mai 2024, à l’adresse https://www.vd.ch/etat-droit-finances/statistique/statistiques-par-domaine/01-population/etat-et-structure-de-la-populationImmo-swissnews.ch. (s. d.).
* Nyon : Une des régions les plus performantes de Suisse. Toute l’information immobilière en Suisse. Consulté 23 avril 2024, à l’adresse https://www.immo-swissnews.ch/Nyon-une-des-regions-les-plus-performantes-de-Suisse_a1130.html
* Planification territoriale. (s. d.). Planification territoriale. Consulté 9 mai 2024, à l’adresse https://www.nyon.ch/nyon-officiel/politiques-thematiques/amenagement-du-territoire/planification-territoriale-946
* swisstopo. (s. d.). swissBUILDINGS3D 2.0. Consulté 9 mai 2024, à l’adresse https://www.swisstopo.admin.ch/fr/modele-du-territoire-swissbuildings3d-2-0

