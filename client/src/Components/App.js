import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Profile from "./Profile";
import "./App.css";


function App() {
  const [postTattoos, setPostTattoos] = useState([])

  useEffect(() => {
    fetch("/me")
      .then((response) => response.json())
      .then((data) => console.log(data))
    // setTattoos(data)
  })

  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar postTattoos={postTattoos} setTattoos={setPostTattoos} />
      <Switch>
        <Route exact path="/">
          {/* <Login /> */}
        </Route>

        <Route path="/Home">
          <Home />
        </Route>

        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
