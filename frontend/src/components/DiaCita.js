import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DiaCita extends Component {
    state = {
        selectedDay: undefined,
        redirect: false,
    };

    handleDayClick = async (day, {selected, disabled}) => {
        if (disabled) {
            return;
        }
        if (selected) {
            this.setState({selectedDay: undefined});
            return;
        }

        await this.setState({selectedDay: day, redirect: true});
        this.props.history.push("/hora",this.state.selectedDay)
    }

    render() {
        return (
            <div style={{textAlign: "center", marginTop: "50px"}}>
                <div style={{textAlign: "center", marginTop: "30px"}}>
                    <h1 style={{borderBottom: "5px solid gray"}}>
                        <span style={{color: "red"}}>Visita</span> Remota
                    </h1>
                </div>
                <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}
                    month={new Date(2020, 7)}
                    fromMonth={new Date(2020, 7)}
                    toMonth={new Date(2020, 8)}
                />
            </div>
        );
    }
}

export default DiaCita;