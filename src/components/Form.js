import React, { useState, useEffect } from 'react';

const Form = ( props ) => {
    const [ Data, setData ] = useState({ Titulo: '', Descripcion: '' });

    const updateData = ( e ) => {
        let name = e.target.name, val = e.target.value;
        setData( {...Data,  [name]: val } )
    }
 
    const saveData = async (e) =>
    {
        e.preventDefault();

        if ( Data.Titulo === '') return alert("El titulo no puede estar vacio!");
        if ( Data.Descripcion === '') return alert("La descripción no puede estar vacia!");

        let actualdata = await JSON.parse(localStorage.getItem('notas')) || [];
        var newdata;
        if ( props.id >= 0)
        {
            actualdata[props.id] = Data;
            newdata = await actualdata;
        }
        else {
            newdata = [ ...actualdata, Data ];
        }

        await props.setData(newdata)
        await localStorage.setItem('notas', JSON.stringify( newdata) );
        await props.setEditing(-1);
        await props.setAdding(false);
    }


    useEffect( () => {
        if ( props.id >= 0 )
        {
            const { Titulo, Descripcion} = props.data[props.id];
            setData( {Titulo, Descripcion } );
        }
    }, [props.data, props.id])


    return <>
        <div className="editor">
        <h1>Edit this note</h1>
        <br/>
        <div className="container">
            <form onSubmit={saveData}>
                <div className="input">
                    <input id="titulo" name="Titulo" value={Data.Titulo} onChange={updateData} type="text" placeholder="Editar nota" />
                </div>
                <div className="textarea">
                    <textarea id="textarea_placeholder" value={Data.Descripcion} name="Descripcion" onChange={updateData} />
                </div>
            </form>
        </div>
        <button onClick={saveData}><i className="fas fa-save"></i> Guardar </button>
        <br/><br/>
        </div>
    </>;


};

export default Form;