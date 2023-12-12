var highScores = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var users = JSON.parse(localStorage.getItem("users"));

if (!users) {
  // checks if users is null, undefined, 0, false, NaN
  users = [];
} else {
  users.sort();
  users.reverse();
}

displayUsers();
function displayUsers() {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    for (let j = 0; j < users[i].length; j++) {
      console.log(users[i][j]);
      var li = document.createElement("li");
      li.textContent = `${users[i][0]} from ${users[i][1]}`;
    }
    highScores.append(li);
  }
}

clear.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  localStorage.clear();
  window.location.reload();
});

