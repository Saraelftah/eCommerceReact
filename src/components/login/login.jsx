import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === userData.email &&
      storedUser.password === userData.password
    ) {
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <section className="row justify-content-center login">
      <div className="col-12 col-md-8 col-lg-6 m-auto p-5 rounded-4 login-form">
        <div className="mb-4 p-3 text-center">
          <Link className="navbar-brand fs-2" to="/">
            🛒iShop
          </Link>
        </div>
        <h2 className="mb-2">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email..."
              autoComplete="off"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* password */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password..."
              autoComplete="off"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div>
            <p className="mt-3">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>

          <button className="btn btn-primary mt-4 col-12 col-md-2">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
