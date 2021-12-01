#Évaluation

Durée : 3h
Rendu : github

Internet non autorisé 
TP et corrections autorisés

####1 - Smart contract

Vous devrez réaliser un smart contract en version pragma 0.5.16 simulant une banque dans lequel nous retrouverons :

- Une fonction deposit qui permettra de déposer de l'ether ( minimum 1 ether )

- Une fonction withdraw qui permettra de retirer les ethers déposés


Spécification de la banque :

La banque n'a pas de owner, elle détient elle-même les ethers.

Il est important pour la banque de savoir ce que chaque personne détient comme solde, il faudra donc avoir une correspondance pour chaque client de sa balance dans la banque. Ce solde sera mis à jour lors du deposit et du withdraw.

Afin de controller la balance de la banque et des clients il sera demandé d'avoir: 
- une fonction balance() qui retourne la balance de chaque client.

- une fonction bankBalance() qui retourne la balance de la banque.


####2 - Déploiement

Après avoir créé votre smart contract, vous allez maintenant le déployer via truffle et ganache (ou infura).

####3 - Front & Web3: dApp

Créer un front de votre choix (html css, bootstrap, react...)
Ajouter la partie web3.js permettant l'intérraction avec votre smart contract.

Ensuite dans l'ordre essayer de réaliser les actions suivantes:

- Afficher dans le front le solde de la banque.
- Afficher dans le front le solde du client courant.
- Déposer de l'ether dans la banque.
- Retirer de l'ether de la banque

Bonus : pouvoir changer de compte dans votre front et retirer un montant précis d'ether.
