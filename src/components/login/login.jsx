import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <section className="login">
      <div className="w-50 m-auto p-5 rounded-4 login-form">
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

          <button className="btn btn-primary mt-4">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
