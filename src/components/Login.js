import React, { Component } from 'react'

import Success from './Success'
import LoginForm from './LoginForm'

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         password: '',
         showAlert: false,
         alertMessage: '',
         success: false
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChangeUsername = this.handleChangeUsername.bind(this)
      this.handleChangePassword = this.handleChangePassword.bind(this)
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
        {this.state.success ? <Success reset={() => this.resetForm()}/> : 
                              <LoginForm handleSubmit={this.handleSubmit}
                                         usernameValue={this.state.usernameValue}
                                         passwordValue={this.state.passwordValue}
                                         showAlert={this.state.showAlert}
                                         alertMessage={this.state.alertMessage}
                                         handleChangePassword={this.handleChangePassword}
                                         handleChangeUsername={this.handleChangeUsername}/>}
        </div>
    </div>
    </section>
    )
  }
}

export default Login