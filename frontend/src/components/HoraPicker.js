import React, {Component, Fragment} from 'react';
import axios from 'axios'
import * as Swal from "sweetalert2";
import 'moment/locale/es-mx';
import moment from 'moment';
import jwt from 'jsonwebtoken';

class HoraPicker extends Component {
    state = {
        horarios: [],
        active: '',
        idCell: '',
        fecha: '',
        doctor:'',
        idDoctor:''
    }

    async componentDidMount() {
        await this.getHorarios();
        moment.locale('es-mx')
        await this.setState({fecha: moment(this.props.history.location.state).format('LL')})
        const token = jwt.decode(localStorage.getItem('token'));
        if (token){
            this.setState({doctor:token.nombre,idDoctor:token._id})
        }
    }

    getHorarios = async () => {
        const res = await axios.get("http://localhost:4000/api/horario");
        this.setState({horarios: res.data})
    }
    selectHour = (e, horario) => {
        if (this.state.active === '') {
            const clicked = e.target.id
            this.setState({active: 'clicked', idCell: clicked})
            Swal.fire({
                text: `Dr. ${this.state.doctor} usted ha seleccionado el día y la hora de su visita remota. \n ¿Está seguro que desea agendar su cita?`,
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                iconColor: '#E01B16',
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const data = {
                        fecha: moment(this.props.history.location.state).format('L'),
                        hora: horario.hora
                    }
                    const res = await axios.post('http://localhost:4000/api/citas',data)
                    this.setState({active: '', idCell: ''})
                } else {
                    this.setState({active: '', idCell: ''})
                }
            })
        } else {
            this.setState({active: '', idCell: ''})
        }
    }

    render() {
        const horarios = this.state.horarios;
        const date = this.state.fecha;
        return (
            <>
                <div style={{textAlign: "center", marginTop: "30px"}}>
                    <h1 style={{borderBottom: "5px solid gray"}}>
                        <span style={{color: "red"}}>Visita</span> Remota
                    </h1>
                </div>
                <div style={{marginTop: "50px", textAlign: "center"}}>
                    <h4 style={{color: "red"}}>{date}</h4>
                    {
                        horarios.length < 1 ? <h3 style={{color: "red"}}>Loading...</h3> :
                            <table className="table table-bordered">
                                <tbody>
                                {
                                    horarios.map((horario, index) =>
                                        <Fragment key={index}>
                                            <tr key={horario._id}>
                                                <>
                                                    <td style={{width: "150px"}}>{horario.hora}</td>
                                                    <td onClick={(e) => this.selectHour(e, horario)}
                                                        id={horario._id}
                                                        className={this.state.active === 'clicked' && this.state.idCell === horario._id ? 'bg-danger' : null}/>
                                                </>
                                            </tr>
                                            {index === 7 ? <tr>
                                                <td colSpan={2}/>
                                            </tr> : null}
                                        </Fragment>
                                    )
                                }
                                </tbody>
                            </table>
                    }
                </div>
            </>
        );
    }
}

export default HoraPicker;