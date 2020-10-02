import React, {Component} from 'react';

class Logout extends Component {
    changeValueOfSession = () => {
        localStorage.removeItem("token");
        window.location.href="/";
    }
    render() {
        return (
            <div className="nav-link text-white" style={{cursor:"pointer"}} onClick={this.changeValueOfSession} >
                Cerrar Sesion
            </div>
        );
    }
}

export default Logout;