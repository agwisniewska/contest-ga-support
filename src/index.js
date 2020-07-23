import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import GAListener from "./components/GAListener";
import {createBrowserHistory} from "history";
import {BrowserRouter} from "react-router-dom";

const trackingId =  "UA-173295022-1";
const history = createBrowserHistory()


ReactDOM.render(
    <BrowserRouter>
          <GAListener trackingId={trackingId} history={history}>
              <App />
          </GAListener>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
