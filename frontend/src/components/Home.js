import React, {Component} from 'react';
import Login from "./Login";

class Home extends Component {
    state = {
        logged: false
    }

    componentDidMount() {
        const logged = localStorage.getItem('token');
        if (logged) {
            this.setState({logged: true});
        }
    }

    render() {
        return (
            <>
                {this.state.logged ? window.location.href="/calendario" : <Login/>}

            </>
        );
    }
}

export default Home;