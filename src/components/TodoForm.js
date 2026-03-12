// Ce composant gère le formulaire d'ajout de tâches
// La fonction ajouterTache est reçue en props depuis App.js
// TodoForm.js
import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');
  const [erreur, setErreur] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    // Afficher un message si le champ est vide
    if (texte.trim() === '') {
      setErreur('⚠️ Veuillez saisir une tâche avant d\'ajouter !');
      return;
    }
    setErreur('');
    ajouterTache(texte);
    setTexte('');
  };

  return (
    <div>
      <form onSubmit={soumettreFormulaire}>
        <input
          value={texte}
          onChange={(e) => {
            setTexte(e.target.value);
            setErreur('');
          }}
          placeholder="Nouvelle tâche..."
        />
        <button type="submit">Ajouter</button>
      </form>
      {erreur && <p className="erreur">{erreur}</p>}
    </div>
  );
}

export default TodoForm;