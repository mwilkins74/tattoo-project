import React, {useState } from "react";

function ProfileImageForm({ user, newProfileImage }) {
  const [url, setUrl] = useState("");
  // const [profileImg, setProfileImg] = useState("")

  // useEffect(() => {
  //   fetch(`/users/${user.id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUrl(data);
  //     });
  // }, [setUrl]);

  function handleSubmit(url) {
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ profile_img: url }),
    })
      .then((r) => r.json())
      .then((data) => newProfileImage(data));
  }

  function handleUrlChange(e) {
    setUrl(e.target.value);
    // console.log(url);
  }

  return (
    <form input="text">
      <input placeholder="Image URL" onChange={handleUrlChange} value={url} />
      <button onClick={() => { handleSubmit(url) }}>Change</button>
    </form>
  );
}

export default ProfileImageForm;
