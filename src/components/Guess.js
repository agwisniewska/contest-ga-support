import React, { useState } from "react";
import ReactGA from 'react-ga';


export function Guess(props) {

    const [value, setValue] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);

        ReactGA.event({
            category: 'Form Submit',
            action: 'Save the answer'
        })

        const link = `/react/level/${value}/`;

        setUrl(link);

    }

    return (
        <>
            <h1> Zagadka nr <b> {props.match.params.level} </b></h1>
            <p> Tekst zagadki </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2> Rozwiązanie </h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Enter your solution" />
                <button> Sprawdź ! </button>
            </form>


            {url && url !== '' &&  <ReactGA.OutboundLink eventLabel='click-view' to={url} >
                      Następna zagadka
            </ReactGA.OutboundLink> }

        </>
    )
}