import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SignupForm({ setUser }) {
  const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImg, setProfileImg] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams()

    function handleSubmitSignUp(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                profile_img: profileImg,
                password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((res) => {
            setIsLoading(false);
            if (res.ok) {
                res.json().then((user) => setUser(user));
                setUsername("")
                setProfileImg("")
                setPassword("")
                setPasswordConfirmation("")
                navigate("/home");
              } else {
                res.json().then((err) => setErrors(err.errors));
            }
            
        });
    }

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmitSignUp}>
        <br />
        <label>
          Username
          <input type="text" name={username} value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </label>
        <br />
        <label>
          Email
          <input type="text" name={email} value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <br/>
        <label>
          Profile Image URL
          <input type="text" name={profileImg} value={profileImg} onChange={(e) => setProfileImg(e.target.value)}></input>
        </label>
        <br/>
        <label>
          Password
          <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <br />
        <label>
          Password Confirmation
          <input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
        </label>
        <br />
        <input type="submit" value="Submit"></input>
      </form>

      {/* <button onClick={setUser}> I already have an account</button> */}
    </div>
  );
}

export default SignupForm;
