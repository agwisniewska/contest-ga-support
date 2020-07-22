import React from "react";


export function Guess({match}) {

    return (
        <>
            <h1> Zagadka nr <b> {match.params.level} </b></h1>
            <p> Tekst zagadki </p>
            <h2> Rozwiązanie </h2>

        </>
    )
}