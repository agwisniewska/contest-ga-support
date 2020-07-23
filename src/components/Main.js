import {Route, Switch, Redirect} from "react-router-dom";
import {Guess} from "./Guess";
import React from "react";
const routes = Array.from(Array(7).keys())

export function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/react/level/1"/>
                )}/>
                <Route exact path="/react" render={() => (
                    <Redirect to="/react/level/1"/>
                )}/>
                {routes.map((route, index) => <Route key={index} exact path={`/react/level/:level/`} component={Guess} />)}
            </Switch>
        </main>
    );
}