import React from 'react';
import TableArticle from './TableNote';

const Table = ({data, setData, setEditing}) => {

    return <section>
         
        { 
            data && data.length 
            ? 
            data.map( (x,i) => <TableArticle setData={setData} setEditing={setEditing} data={data} id={i} key={x.Titulo+i} Titulo={x.Titulo} Descripcion={x.Descripcion}/>) 
            : 
            <h1> No hay notas </h1> 
        }
        
    </section>;
}   




export default Table;