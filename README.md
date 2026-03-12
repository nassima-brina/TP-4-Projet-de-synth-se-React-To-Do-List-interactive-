# TP 4 — Projet de synthèse React – To-Do List interactive

## 📚 Cours
Développement Front-End moderne avec React

---

## Contexte

#### Ce TP constitue le projet de synthèse final du cours Développement Front-End moderne avec React. Il regroupe l'ensemble des notions vues dans les TPs précédents : composants fonctionnels, gestion du state, événements utilisateurs, navigation et intégration de styles CSS.
#### Le but est de construire une application complète et fonctionnelle de A à Z : une To-Do List interactive permettant d'ajouter, cocher, modifier et supprimer des tâches.

---

## Objectifs

#### - Créer une application React complète et structurée
#### - Gérer le state global avec useState
#### - Gérer les événements utilisateurs (ajout, suppression, modification)
#### - Structurer les composants de manière professionnelle
#### - Déployer l'application en production

---

## Technologies utilisées

#### - React 18
#### - JavaScript 
#### - JSX
#### - Hooks React (useState)
#### - CSS personnalisé


---

##  Structure du projet

<img width="1406" height="858" alt="image" src="https://github.com/user-attachments/assets/bcefd91c-0fa6-40c2-9288-ff98fd459395" />


## Installation et lancement

#### - Cloner le projet :

git clone https://github.com/nassima-brina/TP-4-Projet-de-synth-se-React-To-Do-List-interactive-/tree/main


#### - Entrer dans le dossier :
cd mon-projet-react

#### - Installer les dépendances :
npm install


#### - Lancer le serveur de développement :
npm start

#### L'application s'ouvre sur : [http://localhost:3000](http://localhost:3000)

---

##  Démo en ligne

👉 [https://transcendent-douhua-f7119b.netlify.app](https://transcendent-douhua-f7119b.netlify.app)

<img width="1174" height="687" alt="image" src="https://github.com/user-attachments/assets/596e3c41-df6d-450d-96d3-f509f6336975" />

---

## Composants créés

### TodoForm.js
Formulaire contrôlé qui permet d'ajouter une nouvelle tâche. Affiche un message d'erreur si le champ est vide lors de la soumission.

### TodoItem.js
#### Composant qui représente une seule tâche avec :
#### - Une case à cocher pour marquer la tâche comme terminée
#### - Un texte barré quand la tâche est terminée
#### - Un bouton d'édition pour modifier le texte
#### - Un bouton de suppression

### TodoList.js
Composant qui affiche la liste complète des tâches avec map(). Affiche un message si aucune tâche n'existe.

---

## Aperçu de l'application

<img width="902" height="392" alt="image" src="https://github.com/user-attachments/assets/d613f12c-9cb9-4168-a693-0f8884fabc13" />

<img width="1437" height="894" alt="image" src="https://github.com/user-attachments/assets/139e7680-34fc-45df-9e03-e8d469c9864a" />


#### L'application permet de :
#### - Ajouter une nouvelle tâche
#### - Cocher une tâche comme terminée (texte barré)
#### - Modifier le texte d'une tâche existante
#### - Supprimer une tâche
#### - Voir le compteur de tâches terminées
#### - Afficher un message si le champ est vide

---

## Conclusion

Ce projet de synthèse m'a permis de consolider l'ensemble des compétences acquises durant le cours :

- La structuration d'une application React complète avec plusieurs composants
- La gestion du state global dans `App.js` et sa transmission via les props
- La mise en place d'interactions utilisateur avancées (ajout, modification, suppression)
- Le déploiement d'une application React en production avec Netlify
- L'application d'un style CSS soigné pour une interface propre et intuitive
