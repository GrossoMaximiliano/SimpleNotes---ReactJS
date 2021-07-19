import React from 'react';

const TableArticle = ({ id, Titulo, Descripcion, data, setData, setEditing}) => {


    const removeNote = (index) =>
    {
        let newdata = data.filter( ( x, i ) => i !== index );
        localStorage.setItem('notas', JSON.stringify(newdata) );
        setData(newdata);
    }


    return <article>
        <div className="titulo">
        <h1>{Titulo}</h1>
        </div>
        <div className="descripcion">
        <p>{Descripcion}</p>
        </div>
        <div className="btn1">
        <a href="#a" onClick={ev => {ev.preventDefault(); removeNote(id);}} ><i className="fas fa-minus-circle"></i></a>
        </div>
        <div className="btn2">
        <a  href="#a" onClick={ev => {ev.preventDefault(); setEditing(id); } }><i className="fas fa-pen-square"></i></a>
        </div>
    </article>; 



}

export default TableArticle; 