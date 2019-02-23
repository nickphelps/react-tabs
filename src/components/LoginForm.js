import React, { Component } from 'react'
import { runInThisContext } from 'vm';
import Success from './Success'

class LoginForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         password: '',
         showAlert: false,
         alertMessage: '',
         success: false
      }
    }
    handleChangeUsername (event) {
        this.setState({
            userName: event.target.value
        })
    }
    handleChangePassword (event) {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit (event) {
        event.preventDefault()
        if (!this.state.userName) {
            this.setState({
                showAlert: true,
                alertMessage: 'Please Enter A User Name'
            })
        }
        if (!this.state.password) {
            this.setState({
                showAlert: true,
                alertMessage: 'Please enter a Password'
            })
        } else {
            this.clearAlert()
            this.setState({
                success: true
            })
        }
    } 
    clearAlert () {
        this.setState({
            showAlert: false,
            alertMessage: ''
        })
    }
    resetForm () {
        this.clearAlert()
        this.setState({
            userName: '',
            password: '',
            success: false
        })
    }
  render() {
    return (
    <section className="content">
        <div style={{height: '40px'}}></div>
    <div className="columns is-centered">
        <div className="column is-half">
        {this.state.success ? <Success reset={() => this.resetForm()}/> : <div className="box">
                <h1 className="title">Login</h1>
                {this.state.showAlert ? <div className="notification is-danger">
                                            <button class="delete"></button>
                                            {this.state.alertMessage}
                                            </div>: null}
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input placeholder="Username" 
                                type="text" id="usernameInput" 
                                className="input is-medium" 
                                value={this.state.userName} 
                                onChange={(event) => this.handleChangeUsername(event)}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input placeholder="Password" 
                                type="password" 
                                className="input is-medium" 
                                value={this.state.password} 
                                onChange={(event) => this.handleChangePassword(event)}/>
                            </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary is-medium" 
                                    type="submit">
                                        Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>}
        </div>
    </div>
    </section>
    )
  }
}

export default LoginForm