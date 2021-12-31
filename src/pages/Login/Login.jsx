import "./login.css";

const Login = () => {
  return (
    <div className="login">
    <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
        <label>Email:</label>
        <input className="loginInput" type="email" placeholder="Email" />
        <label>Password:</label>
        <input className="loginInput" type="password" placeholder="Password" />
        <button className="logButton">Login</button>
      </form>
    </div>
  );
};

export default Login;
