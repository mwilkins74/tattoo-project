import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function NavBar({ setUser }) {

    let navigate = useNavigate();

    function handleLogOut() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          navigate("/");
        }
      });
  } 
  
  return (
    <div>
      <div class="navbar-toggler">
        <div class="nav-link text-light btn-block col-sm-4 btn btn-danger option-button btn-outline-dark">
          <div class="navbar-nav mr-auto mt-2 mt-lg-0">
            <div class="nav-item active">
              <Link exact to="/Home" class="nav-link">
                Home
              </Link>
            </div>
              <div class="nav-item">
                <Link to="/Profile" class="nav-link" >
                  Profile
                </Link>
                <div >
                  <div class="nav-item">
                    <Link to="/" class="nav-link" onClick={handleLogOut}>
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NavBar;
