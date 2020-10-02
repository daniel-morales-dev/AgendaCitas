import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Ciclos extends Component {
    render() {
        return (
            <div style={{textAlign:"center", marginTop:"50px"}}>
                <p style={{color:"gray", fontSize:"20px"}}>Agende su visita remota<br/> seleccionando el ciclo en el dia y hora que usted desee.</p>
                <NavLink  to="/calendario" className="btn btn-danger" style={{marginTop:"70px", width:"300px", height:"50px", borderRadius:"40px", padding:"10px"}}>Ciclo 1</NavLink>
            </div>
        );
    }
}

export default Ciclos;