import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";
import Profile from "./Profile";

function NavBar() {
  return (
    <div class="nav-link text-light btn-block col-sm-4 btn btn-danger option-button btn-outline-dark">
      <div>
        {/* <img
        src="https://user-images.githubusercontent.com/102488171/178009363-a7e88595-2387-4be9-90c1-9e0290e74fb4.png"
        className="logo"
        alt="logo" */}
        {/* />////// */}

        <Link exact to="/Home">
          Home
        </Link>
        <Link to="/Profile" >
          <Profile /> Profile
        </Link>
        <Link to="/">
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
