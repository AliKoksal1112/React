import React, { useContext, useState } from "react"

import tachesContext from "contexts/tachesContext"


const AddTache = () => {

    const { addTache } = useContext(tachesContext);
    const [name, setName] = useState('')


    const handleAddTache = (event) => {
        event.preventDefault();
        const newTache = {
            name: name,
            priority: 1,
            check: false,
        }
        addTache(
            newTache
        );
        setName('')
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleAddTache}>
            <input type="text" value={name} onChange={handleNameChange}></input>
            <button type="submit">
                Ajouter
            </button>
        </form>
    );
}
export default AddTache;
