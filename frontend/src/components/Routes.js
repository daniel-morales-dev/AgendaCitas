import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import HoraPicker from "./HoraPicker";
import DiaCita from "./DiaCita";
import Login from "./Login";
import Logout from "./Logout";
import Ciclos from "./Ciclos";

//RUTAS//


const isLogged = () => {
    if (!localStorage.getItem('token')) {
        return false;
    }
    return true;
};

const RouteSesions = (props) =>
    isLogged() ? <Redirect to="/" /> : <Route {...props} />;

const SecureRoute = (props) =>
    isLogged() ? <Route {...props} /> : <Redirect to="/" />;


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <SecureRoute  path="/calendario" exact component={DiaCita}/>
            <SecureRoute path="/hora" exact component={HoraPicker} />
            <SecureRoute path="/ciclos" exact component={Ciclos} />
            <RouteSesions path="/login" exact component={Login} />
            <SecureRoute path="/logout" component={Logout} />
        </Switch>
    );
}
