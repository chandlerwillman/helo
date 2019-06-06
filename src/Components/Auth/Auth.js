import React, { Component } from 'react';
import axios from 'axios';
import './Auth.css';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }
    
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        axios.post('http://localhost:4005/api/users', {
            username, password
        });
    }

    render() {
        return (
            <div className="auth">
                <div className="columns is-centered" id="full-grad">
                    <form className="column is-half card" id="full-grad">
                        <div className="form-content">
                            <div className="login-logo">
                                <img src="https://github.com/DevMountain/simulation-3/blob/master/assets/helo_logo.png?raw=true" alt="helo-logo" />
                                <h1>Helo</h1>
                            </div>
                            <div className="field">
                                <label>Username:</label>
                                <input 
                                    type="text"
                                    value={this.state.username}
                                    onChange={(e) => this.handleUsernameChange(e)} />
                            </div>
                            <div className="field">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={(e) => this.handlePasswordChange(e)} />
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <button className="button" type="submit">Login</button>
                                </div>
                                <div className="column">
                                    <button className="button" onClick={(e) => this.handleRegister(e)}>Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;