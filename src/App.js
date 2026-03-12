// App.js
// Composant principal qui gère tout le state de l'application
// Les fonctions ajouterTache, changerEtat, supprimerTache sont passées en props
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // Le tableau taches contient toutes les tâches de l'application
  const [taches, setTaches] = useState([]);

  // Ajoute une nouvelle tâche avec un id unique basé sur la date
  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false
    };
    setTaches([...taches, nouvelleTache]);
  };

  // Inverse le statut terminee d'une tâche selon son id
  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  // Supprime une tâche du tableau selon son id
  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  // Compte les tâches terminées
  const tachesTerminees = taches.filter((t) => t.terminee).length;

  return (
    <div className="App">
      <h1>📝 Ma To-Do List</h1>
      <p className="compteur">
        {tachesTerminees} / {taches.length} tâches terminées
      </p>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList
        taches={taches}
        changerEtat={changerEtat}
        supprimerTache={supprimerTache}
      />
    </div>
  );
}

export default App;