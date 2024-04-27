// Add your code here

function submitData(userName, userMail) {
  let userData = { name: userName, email: userMail };
  let configObj = {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let h2 = document.createElement("h2");
      h2.textContent = data.id;
      document.body.appendChild(h2);
    })
    .catch((error) => {
      let h3 = document.createElement("h3");
      h3.textContent = error.message;
      document.body.appendChild(h3);
    });
}
