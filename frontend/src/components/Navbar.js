import React, {
    Component
} from 'react'
import {NavLink} from "react-router-dom";
import Logout from "./Logout";

export default class Navbar extends Component {
    state = {
        logged: false,
    }

    componentDidMount() {
        const logged = localStorage.getItem('token')
        if (logged) {
            this.setState({logged: true})
        }
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-danger ">
                    <NavLink className="navbar-brand text-white" exact to="/" activeClassName="main-nav-active"
                             style={{fontWeight: "bold"}}>
                        Citas
                    </NavLink>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/calendario"
                                         activeClassName="main-nav-active">Calendario</NavLink>
                            </li>
                            {this.state.logged ? <li className="nav-item">
                                <Logout/>
                            </li> : <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/login" activeClassName="main-nav-active">Iniciar
                                    Sesion</NavLink>
                            </li>}


                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}