import React, {useState} from "react";
import ReactGA from 'react-ga';

export function Guess({match}) {

    const [value, setValue] = useState('');
    const [url, setUrl] = useState('/react/level/1/');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);

        ReactGA.event({
            category: 'Form Submit',
            action: 'Save the answer'
        })
    }

    return (
        <>
            <h1> Zagadka nr <b> {match.params.level} </b></h1>
            <p> Tekst zagadki </p>
            <h2> Rozwiązanie </h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Enter your solution" />
                <button> Go ! </button>
            </form>


            <ReactGA.OutboundLink eventLabel='click-view' to={url} >
                      Idź do następnej zagadki
            </ReactGA.OutboundLink>

        </>
    )
}