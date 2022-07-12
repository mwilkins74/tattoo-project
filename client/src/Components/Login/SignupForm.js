import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm({ setUser }) {
  const navigate = useNavigate();
  const [createFormData, setCreateFormData] = useState({
    username: "",
    email: "",
    profile_img: "",
    password: "",
    password_confirmation: "",
  });

  function onHandleChangeForm(e) {
    setCreateFormData((createFormData) => ({
      ...createFormData,
      [e.target.name]: e.target.value,
    }));
  }

  async function onSubmitCreateForm(e) {
    e.preventDefault();

    let newUser = {};

    for (const key in createFormData) {
      if (createFormData[key] !== "") {
        newUser[key] = createFormData[key];
      }
    }

    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      response.json().then((data) => {
        setUser(data);
        navigate("/home");
      });
    } else {
      response.json().then((data) => alert(data.errors));
    }
  }

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={onSubmitCreateForm}>
        <label>
          Email
          <input type="text" onChange={onHandleChangeForm}></input>
        </label>
        <br />
        <label>
          Name
          <input type="text" onChange={onHandleChangeForm}></input>
        </label>
        <br />
        <label>
          Username
          <input type="text" onChange={onHandleChangeForm}></input>
        </label>
        <br />
        <label>
          Password
          <input type="password" onChange={onHandleChangeForm}></input>
        </label>
        <br />
        <input type="submit" value="Submit"></input>
      </form>

      <button onClick={setUser}> I already have an account</button>
    </div>
  );
}

export default SignupForm;
