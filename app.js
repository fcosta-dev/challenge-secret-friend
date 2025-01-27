let friendsList = [];

function addFriend() {
  const input = document.getElementById("friend");
  const name = input.value.trim();

  if (!name) {
    alert("Please enter a valid name.");
    return;
  }

  friendsList.push(name);
  input.value = "";
  displayList();
}

function displayList() {
  const ul = document.getElementById("friendsList");
  ul.innerHTML = "";

  friendsList.forEach((name, index) => {
    const li = document.createElement("li");
    li.textContent = name;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeFriend(index);
    removeButton.style.marginLeft = "10px";

    li.appendChild(removeButton);
    ul.appendChild(li);
  });
}

function removeFriend(index) {
  friendsList.splice(index, 1);
  displayList();
}

function drawFriend() {
  if (friendsList.length === 0) {
    alert("The list is empty. Add names before drawing.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * friendsList.length);
  const selectedFriend = friendsList[randomIndex];

  const result = document.getElementById("result");
  result.innerHTML = `<li>The selected friend is: <strong>${selectedFriend}</strong></li>`;
}