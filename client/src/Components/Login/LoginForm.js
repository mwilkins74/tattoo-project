import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          navigate("/home");
        });
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
        {errors.map((err) => (
          <alert key={err}>"Invalid information"</alert>
        ))}
      </form>
    </div>
  );
}

export default LoginForm;
