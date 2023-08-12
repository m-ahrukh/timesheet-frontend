import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "", 
            password: ""
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)
        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
                        username: this.state.username,
                        password: this.state.password};
        console.log("employee => " + JSON.stringify(employee));

        // EmployeeService.createEmployee(employee).then((res) => {
        //     window.location.replace('/employees');
        // });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Login</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Username</label>
                                        <input placeholder='Username' name='username' 
                                        className='form-control' value={this.state.username} 
                                        onChange={this.changeUsernameHandler} />
                                    </div>
                                    <br></br>
                                    <div className='form-group'>
                                        <label>Password</label>
                                        <input placeholder='Password' name='password' type='password'
                                        className='form-control' value={this.state.password} 
                                        onChange={this.changePasswordHandler} />
                                    </div>
                                    <br></br>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <Link to="/employees" className='btn btn-danger' style={{marginLeft: "10px"}}>Cancel</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}
