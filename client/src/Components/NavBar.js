import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
function NavBar({setUser}) {
  let navigate = useNavigate();

  function handleLogOut(){
    fetch("/logout", {method: "DELETE"})
    .then((r) => {
        if (r.ok) {
            setUser(null)
            navigate("/")
        }
    }
    )
} 
=======
function NavBar() {
  
    let navigate = useNavigate();

    function handleLogOut() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          navigate("/");
        }
      });
  } 
  
>>>>>>> 5aec30ad07b791dd800a2e756a8faecb43ee61a7
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
<<<<<<< HEAD
                    <Link to="/" class="nav-link" onClick={handleLogOut}>
                      Log-Out
=======
                    <Link to="/" class="nav-link" onClick={handleLogOut} >
                      Log Out
>>>>>>> 5aec30ad07b791dd800a2e756a8faecb43ee61a7
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
