import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter'
import './Layout.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const { data, loading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const {author, quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSixe, setBoxSixe] = useState({});

    useLayoutEffect( () => {
        setBoxSixe(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                > 
                { quote } 
                </p>
                <br />
            
            </blockquote>
                
            <pre>
                {
                   JSON.stringify(boxSixe, null, 3)
                }
            </pre>
            
            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Next Quote
            </button>
            

        </div>
    )
}
