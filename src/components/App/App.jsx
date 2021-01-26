import React, { useContext } from "react"

import Tache from "components/Tache/Tache";
import tachesContext from "contexts/tachesContext";
import AddTache from "components/AddTache/AddTache";
import HideOrShowCompleteTask from "components/HideOrShowCompleteTask/HideOrShowCompleteTask"

const App = () => {

  const { sortedTaches } = useContext(tachesContext);
  if (sortedTaches.length === 0) {
    return (
      <div>
        <p>aucune tâche dans la liste, veuillez en ajouter une grâce au formulaire ci-dessous</p>
        <AddTache />
      </div>
    )
  }
  
  return (
    <div>
      <h1>Liste des taches</h1>
      <ul>
        {sortedTaches.filter(tache => tache.check === false).map((tache) => (
          <Tache key={tache.id} tache={tache} />
        ))}
      </ul>
      <AddTache />
      <HideOrShowCompleteTask />
    </div>
  )
}

export default App 