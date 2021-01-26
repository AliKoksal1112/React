import React, { useContext } from "react";

import tachesContext from "contexts/tachesContext"


const Tache = (props) => {

    const { updateNameTache } = useContext(tachesContext);
    const { updatePriorityChange } = useContext(tachesContext);
    const { deleteTache } = useContext(tachesContext);
    const { updateChecked } = useContext(tachesContext);

    const handleNameChange = (event) => {
        updateNameTache(props.tache.id, event.target.value);
    };

    const handleDeleteButton = (event) => {
        event.preventDefault();
        deleteTache(props.tache.id);
    }

    const handlePriorityChange = (event) => {
        updatePriorityChange(props.tache.id, event.target.value);
    }

    const handleCheckedChange = () => {
        updateChecked(props.tache.id);
    }

    return (
        <li>
            <input type="text" id={props.tache.id} value={props.tache.name} onChange={handleNameChange} />
            <select value={props.tache.priority} onChange={handlePriorityChange}>
                <option value={3}>Haute</option>
                <option value={2}>Moyenne</option>
                <option value={1}>Basse</option>
            </select>
            <input type="checkbox" onChange={handleCheckedChange} id={props.tache.id} checked={props.tache.check} />
            <button onClick={handleDeleteButton} >Delete</button>
        </li>
    )
}



export default Tache