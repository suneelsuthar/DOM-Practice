var arr = localStorage.getItem("students");
if (arr) {
  arr = JSON.parse(arr);
} else {
  arr = [];
}
console.log(arr)

function savepost() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (username !== "" && email !== "" && password !== "") {
    var obj = {
      username: username,
      email: email,
      password: password,
    };
    arr.unshift(obj);
    localStorage.setItem("students", JSON.stringify(arr));
  }
}
