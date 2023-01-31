export const saveUser = (name, email, password, profilePicture) => {
  const user = {
    name,
    email,
    password,
    profilePicture,
  };

  fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 200) {
        const token = data.token;
        localStorage.setItem("c-AuthToken", token);
        const status = 200;
        return status;
      }
    });
};
