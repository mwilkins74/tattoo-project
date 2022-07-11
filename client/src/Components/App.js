import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Profile from "./Profile";
import "./App.css";
import Login from "./Login";



function App() {
  const [tattoos, setTattoos] = useState([]);

  const [user, setUser] = useState(false)

 useEffect(() => {
   fetch("/me").then((r) => {
     if (r.ok) {
       r.json().then((user) => setUser(user));
     }
   });
 }, []);
       
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <div>
        <Switch>

          <Route exact path="/">
            <Login setUser={user} />
          </Route>

          <Route exact path="/Home  ">
            <Home user={user} tattoos={tattoos} setTattoos={setTattoos} />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
