import React, { useState } from "react";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
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
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      {/* <h1>Login</h1> */}
      <form onSubmit={handleSubmit} />
      <label>
        Username
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <br />
      <label>
        Password
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
          <button>{isLoading ? "Loading..." : "Login"}</button>
          {errors.map((err) => (
              <alert key={err}>"Invalid information"</alert>
          ))}
    </div>
  );
}

export default LoginForm;
