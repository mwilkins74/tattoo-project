import React from 'react';

function Profile({ user, onTattooLike }) {
    
   

    return (
        <div>
            <h1 className="header-h1">Profile Page</h1>
            <img stlye={{width:"160px",height:"160px",borderRadius:"80px" }} src={user.profile_img}/>
            <h2 className="favorites-container">Favorite Tattoos</h2>
            <h5 className="Japanese">Japanese</h5>
        </div>
    )
}

export default Profile;;