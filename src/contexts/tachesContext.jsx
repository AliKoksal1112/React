import React, { useState, useEffect } from "react";

import tachesService from 'services/tacheService'

const Context = React.createContext(null);

const ProviderWrapper = (props) => {

    const [taches, setTaches] = useState([])
    const [show, setShow] = useState(false)

    const initialLoad = () => {
        tachesService
            .getAll()
            .then(tache => {
                setTaches(tache)
            })
            .catch(error => {
                console.error('Unable to load data.', error)
            })
    }
    useEffect(initialLoad, [])

    const addTache = (tache) => {
        tachesService
            .create(tache)
            .then(insertedTache => {
                setTaches(taches.concat(insertedTache))
            })
            .catch(error => {
                console.error('Unable to insert data.', error)
            })
    }

    const updateNameTache = (id, name) => {
        const tache = taches.find(t => t.id === id)
        const changedTache = { ...tache, name: name }

        tachesService
            .update(id, changedTache)
            .then(returnedTache => {
                setTaches(taches.map(tache => tache.id !== id ? tache : returnedTache))
            })
    }

    const updatePriorityChange = (id, priority) => {
        const tache = taches.find(t => t.id === id)
        const changedTache = { ...tache, priority: priority }
        tachesService
            .update(id, changedTache)
            .then(returnedTache => {
                setTaches(taches.map(tache => tache.id !== id ? tache : returnedTache))
            })
    }

    const updateChecked = (id) => {
        const tache = taches.find(t => t.id === id)
        const changedTache = { ...tache, check: !tache.check }
        tachesService
            .update(id, changedTache)
            .then(returnedTache => {
                setTaches(taches.map(tache => tache.id !== id ? tache : returnedTache))
            })
    }

    const deleteTache = (id) => {
        tachesService
            .deleteTache(id)
            .then(deletedTache => {
                setTaches(taches.filter(t => t.id !== id))
            })
    }

    const sortedTaches = taches.sort((a, b) => b.priority - a.priority);

    const exposedValue = {
        sortedTaches,
        show,
        setShow,
        addTache,
        setTaches,
        initialLoad,
        updateNameTache,
        deleteTache,
        updatePriorityChange,
        updateChecked
    }

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    )
}

export {
    Context,
    ProviderWrapper,
}
export default Context;