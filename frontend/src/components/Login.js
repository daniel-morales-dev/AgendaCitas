import React, {Component} from 'react';
import axios from 'axios'
import * as Swal from "sweetalert2";

class Login extends Component {
    state={
        cedula:0
    }
    onsubmitForm = async (e)=>{
        e.preventDefault();
        const data = {
            cedula:this.state.cedula
        }
        const res = await axios.post('/api/login',data)
        if (res.status===200){
            await Swal.fire(
                'Bienvenido!',
                'Has iniciado sesion!',
                'success'
            )
            await localStorage.setItem('token',res.data.token)
            window.location.href = '/ciclos';
        }
    }
    onChangeInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <>
                <div style={{textAlign:"center", marginTop:"30px"}}>
                    <h1 style={{borderBottom:"5px solid gray"}}>
                        <span style={{color: "red"}}>Visita</span> Remota
                    </h1>
                </div>
                <div className="container login" style={{paddingTop: "100px"}}>

                    <form onSubmit={this.onsubmitForm}>
                        <div className="form-group">
                            <h3 style={{textAlign: "center"}}>Bienvenido(a)</h3>
                            <p style={{textAlign: "center"}}>Si ya está registrado(a) inicie la visita remota digitando
                                su numero de cédula</p>
                            <input type="Number" className="form-control" id="cedula" name="cedula" onChange={this.onChangeInput}/>
                        </div>
                        <div className="form-group" style={{textAlign: "center"}}>
                            <button type="submit" className="btn btn-danger" style={{width: "200px"}}>Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>

            </>
        );
    }
}

export default Login;