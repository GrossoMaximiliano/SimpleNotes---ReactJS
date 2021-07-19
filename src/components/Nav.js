import React from 'react';

export default function Nav( {adding, editing, newNote} )
{

    return (
        <nav className="nav">
            <h1>Notas</h1>
            <button className="button" onClick={newNote}><i className="fas fa-plus"></i> { adding === false && editing === -1 ? "Nota" : "Cancelar" } </button>   
        </nav>
    );
}