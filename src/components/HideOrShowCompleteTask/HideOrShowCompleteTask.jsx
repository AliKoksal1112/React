import React, { useContext } from "react";

import tachesContext from "contexts/tachesContext"
import Tache from "components/Tache/Tache"

const HideCompleteTask = () => {

    const { show } = useContext(tachesContext)
    const { setShow } = useContext(tachesContext)
    const { sortedTaches } = useContext(tachesContext)

    const handleOnChange = () => {
        setShow(!show)
    }
    if (show === true) {
        return (
            <div>
                <button onClick={handleOnChange}> Cacher les taches finies </button>
                <ul>
                    {sortedTaches.filter(tache => tache.check === true).map((tache) => (
                        <Tache key={tache.id} tache={tache} />
                    ))}
                </ul>
            </div>
        )
    }
    return (
        <button onClick={handleOnChange}> Afficher les taches finies </button>
    )
}
export default HideCompleteTask