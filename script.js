function getUser() {
  const spinner = document.getElementById("spinner");
  const container = document.getElementById("userContainer");

  spinner.style.display = "block";
  container.innerHTML = "";

  fetch("https://randomuser.me/api/?results=16")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      spinner.style.display = "none";

      document.getElementById("rawJson").textContent = JSON.stringify(
        data,
        null,
        1
      );

      data.results.forEach((user) => {
        const card = document.createElement("div");
        card.className = "userCard";
        card.innerHTML = `
            <img src="${user.picture.medium}" alt="User Photo">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p><strong>Email:</strong><br>${user.email}</p>
            <label><strong>Country:</strong>${user.location.country}</label>
            `;
            // <p><strong>Country:</strong><br>${user.location.country}</p>
        container.appendChild(card);
      });
    })
    .catch((err) => {
      spinner.innerHTML = "<p>Error Fetching users</p>";
    });

    
}
