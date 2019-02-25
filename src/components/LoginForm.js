import React from 'react'

const LoginForm = ({ handleSubmit, handleChangePassword, handleChangeUsername, usernameValue, passwordValue, showAlert, alertMessage }) => {
    console.log()
    return (
        <div className="box">
            <h1 className="title">Login</h1>
            {showAlert ? <div className="notification is-danger">
                <button class="delete"></button>
                {alertMessage}
            </div> : null}
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input placeholder="Username"
                            type="text" id="usernameInput"
                            className="input is-medium"
                            value={usernameValue}
                            onChange={(event) => handleChangeUsername(event)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input placeholder="Password"
                            type="password"
                            className="input is-medium"
                            value={passwordValue}
                            onChange={(event) => handleChangePassword(event)} />
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
        </div>
    )
}

export default LoginForm
