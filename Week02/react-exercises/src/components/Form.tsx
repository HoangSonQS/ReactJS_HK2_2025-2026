import '../styles/components/Form.css'

const LoginForm = () => {
    return (
        <div className="login-container">
            <h2>Login Form</h2>
            <form action="" className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm