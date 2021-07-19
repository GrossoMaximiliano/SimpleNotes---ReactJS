import { useState, useEffect } from 'react';

export default function useFetch(item)
{
    const [ data, setData ] = useState([]);

    useEffect( () => {
        const getFetch = async () => {
            let value = await localStorage.getItem(item);
            if ( value ) {
                let json = await JSON.parse(value);
                await setData(json)
            }
        } 
        getFetch();
        
    }, [item]);
 
    return data;
    
} 