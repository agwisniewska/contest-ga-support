import React, {useEffect} from 'react';
import './App.css';

import {Main} from "./components/Main";
import {Header} from "./components/Header";

export function App() {

    return (<>
        <Header/>
        <Main />
    </>
  );
}