import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";

function NavBar() {
  return (
    <div class="nav-link text-light btn-block col-sm-4 btn btn-danger option-button btn-outline-dark">
      <div>
        <Link exact to="/Home">
          Home
        </Link>
        <Link to="/Profile" >
          Profile
        </Link>
        <Link to="/">
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
