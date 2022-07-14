import React from 'react';
import { useNavigate } from 'react-router-dom';
// import TattooCard from './TattooCard';

function Profile({ user, onTattooLike }) {
    let navigate = useNavigate();
   
    // function FilterTattoos(){

    // }

    function handleDelete() {
        fetch(`/user/${user.id}`, {
          method: 'DELETE'
        }).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                console.log(user);
                navigate("/");
              });
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
        }

    return (
        <div>
            <h1 className="header-h1">Profile Page</h1>
            <h2>{user.username}</h2>
            <img stlye={{width:"160px",height:"160px",borderRadius:"80px" }} src={user.profile_img} alt={user.profile_img}/>
            <h2 className="favorites-container">Favorite Tattoos</h2>
                <ul>{onTattooLike}</ul>
            <h5 className="Japanese">Japanese</h5>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Delete your Account</h2>
            <button onClick={handleDelete}>Delete</button>


        </div>
    )
}

export default Profile;;