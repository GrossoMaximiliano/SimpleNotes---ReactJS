import React, {useEffect, useState} from 'react';
import useFetch from './hooks/useFetch';
import Form from './components/Form';
import Table from './components/Table';
import Nav from './components/Nav';

import './App.css';

export default function App()
{
 
    const [data, setData ] = useState([])
    const [adding, setAdding ] = useState(false);
    const [editing, setEditing ] = useState(-1);

    const fetch = useFetch('notas');

    useEffect( () => {
        setData(fetch);
    }, [fetch])
 
    const newNote = (e) => {
        if ( adding === false && editing === -1 ) setAdding(true);
        else {
            setAdding(false);
            setEditing(-1);
        }
    }
    
    return <>
        <Nav newNote={newNote} adding={adding} editing={editing}/>
        { adding ? <Form setData={setData} setAdding={setAdding} setEditing={setEditing}/> : null }
        { editing !== -1 ? <Form data={data} setData={setData} id={editing} setAdding={setAdding} setEditing={setEditing}/> : null }
        { editing === -1 && !adding ? <Table data={data} setData={setData} setEditing={setEditing}/> : null }
    </>;
}