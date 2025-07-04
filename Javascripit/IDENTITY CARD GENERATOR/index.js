var cards = [];

function addCard() {
  var firstName = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var email = document.getElementById("email");
  var rollnumber = document.getElementById("rollnumber");
  var profilePic = document.getElementById("profilepic");
  var dob = document.getElementById("dob");
  var nic = document.getElementById("nic");

  var userInfo = {
    firstName: firstName.value,
    lastname: lastname.value,
    email: email.value,
    rollnumber: rollnumber.value,
    profilePic: profilePic.src,
    dob: dob.value,
    nic: nic.value,
  };

  cards.unshift(userInfo);
  alert("card added");
  console.log(cards);
}

function viewCards() {
  var data = JSON.stringify(cards);
  window.location.href = `./viewcards.html?username=codenetic&data=${data}&id=123`;
}
