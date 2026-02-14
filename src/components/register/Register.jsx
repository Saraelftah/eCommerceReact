import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(userData));

    if (!userData) {
      alert("Please fill in all fields");
    }
    navigate("/login");
  }

  return (
    <section className="row justify-content-center register">
      <div className="col-12 col-md-8 col-lg-6 m-auto p-5 rounded-4 login-form">
        <div className="mb-4 p-3 text-center">
          <Link className="navbar-brand fs-2" to="/">
            🛒iShop
          </Link>
        </div>
        <h2 className="mb-2">Register</h2>
        <form onSubmit={handleFormSubmit}>
          {/* name */}
          <div>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="username"
              id="name"
              onChange={handleChange}
              className="form-control mb-3"
              required
              placeholder="Enter your name..."
              autoComplete="off"
            />
          </div>

          {/* email */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="form-control mb-3"
              required
              placeholder="Enter your Email..."
              autoComplete="off"
            />
          </div>

          {/* password */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Enter your password..."
              autoComplete="off"
            />
          </div>

          <div>
            <p className="mt-3">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>

          <button className="btn btn-primary mt-4 col-12 col-md-2">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
