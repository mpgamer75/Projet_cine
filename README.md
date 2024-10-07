# Projet_cine

# Projet de test pour réaliser des commmits pour le projet de Web 

## Languages de programmation utilisés : 
         JavaScript
         HTML
         CSS
         C et Java


# Guide rapide pour utiliser npm

Ce guide vous rappelle les commandes de base pour gérer vos projets Node.js avec npm.

Pour créer un nouveau fichier `package.json`, exécutez : 
`npm init`.

Si vous souhaitez accepter les valeurs par défaut, exécutez : 
`npm init -y`.

Pour installer une nouvelle dépendance, utilisez : 
`npm install <nom_du_package>`. 
Exemple : `npm install express`.

Pour installer une dépendance uniquement pour le développement, utilisez : 
`npm install <nom_du_package> --save-dev`. 
Exemple : `npm install jest --save-dev`.

Pour mettre à jour toutes les dépendances, utilisez : 
`npm update`.

Pour supprimer une dépendance, utilisez : 
`npm uninstall <nom_du_package>`. 
Exemple : `npm uninstall express`.

Pour exécuter un script défini dans le `package.json`, utilisez : 
`npm run <nom_du_script>`. 
Exemple : `npm run test`.

Pour ajouter un script, modifiez le fichier `package.json` et ajoutez une entrée dans la section `scripts` : 
```json
"scripts": {
  "test": "echo \"Running tests...\""
}
 
