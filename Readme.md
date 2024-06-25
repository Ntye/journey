+---------------------+
| PassagerSansVehicule|
+---------------------+
| - nom               |
| - prénom            |
| - email             |
| - téléphone         |
+---------------------+
| + réserverTransport()|
| + réserverHébergement()|
| + planifierItinéraire()|
| + ajouterActivité()   |
+---------------------+
|
| 1
|
| *
+---------v---------+
|    Reservation    |
+-------------------+
| - type            |
| - date            |
| - heure           |
| - prix            |
+-------------------+
| + confirmer()     |
| + annuler()       |
+---------+---------+
| 1
|
| *
+---------v---------+            +-------------------+
|     Transport     |            |   Hébergement     |
+-------------------+            +-------------------+
| - type            |            | - nom             |
| - départ          |            | - adresse         |
| - arrivée         |            | - dateDébut       |
| - durée           |            | - dateFin         |
| - coût            |            | - coût            |
+-------------------+            +-------------------+
| + réserver()      |            | + réserver()      |
| + annuler()       |            | + annuler()       |
+-------------------+            +-------------------+
|
| *
| 1
+---------v---------+
|     Itinéraire    |
+-------------------+
| - listeTransports |
| - listeHébergements|
| - listeActivités  |
+-------------------+
| + ajouterTransport()|
| + ajouterHébergement()|
| + ajouterActivité()  |
+-------------------+
|
| *
| 1
+---------v---------+
|     Activité      |
+-------------------+
| - nom             |
| - description     |
| - date            |
| - coût            |
+-------------------+
| + réserver()      |
| + annuler()       |
+-------------------+
