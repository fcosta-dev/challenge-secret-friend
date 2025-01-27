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

