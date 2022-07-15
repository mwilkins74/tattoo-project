import React, {useState} from 'react';

function ProfileImageForm({ user, newProfileImage }) {
  const [url, setUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newImage = { url };
    handlePost(newImage);
  }

  function handlePost() {
    console.log(user);
    console.log(user.id);
    fetch(`/user/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        profile_img: "" ,
      }),
    })
      .then((res) => res.json())
      .then((newImage) => {
        return newImage;
      })
      .catch((err) => console.error(err));
  }

  function handleUrlChange(e) {
    setUrl(newProfileImage);
  }

  return (
    <form input="text" onSubmit={handleSubmit}>
      <input placeholder="Image URL" onChange={handleUrlChange} value={url} />
      <input type="submit" />
      Change profile pic
    </form>
  );
}

export default ProfileImageForm;