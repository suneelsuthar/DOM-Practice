var params = new URLSearchParams(window.location.search);
var data = params.get("data")

if(data){
  data = JSON.parse(data)
}

console.log(data)



var parent = document.getElementById("cardssection");


for (var i = 0; i < data.length; i++) {
  var card = document.createElement("div");
  card.setAttribute("class", "col-lg-8 col-md-10");
  card.setAttribute("style", "margin:10px");
  var cardinner = document.createElement("div");
  cardinner.setAttribute(
    "class",
    "id-card-landscape shadow-lg p-4 bg-white rounded d-flex align-items-center position-relative flex-wrap"
  );
  var cardbg = document.createElement("div");
  cardbg.setAttribute(
    "class",
    "id-card-bg position-absolute top-0 start-0 w-100 h-100"
  );
  cardinner.appendChild(cardbg);
  var cardphoto = document.createElement("div");
  cardphoto.setAttribute(
    "class",
    "id-card-photo flex-shrink-0 me-4 mb-3 mb-md-0 text-center"
  );
  cardphoto.setAttribute("style", "z-index:1");
  var img = document.createElement("img");
  img.setAttribute("src", "https://randomuser.me/api/portraits/men/1.jpg");
  img.setAttribute("alt", "Profile");
  img.setAttribute("class", "rounded-circle border border-3 border-primary");
  img.setAttribute(
    "style",
    "width: 120px; height: 120px; object-fit: cover; box-shadow: 0 4px 20px rgba(0,0,0,0.08)"
  );
  cardphoto.appendChild(img);
  cardinner.appendChild(cardphoto);
  var carddetails = document.createElement("div");
  carddetails.setAttribute("class", "d-card-details flex-grow-1");
  carddetails.setAttribute("style", "z-index:1");
  var username = document.createElement("h4");
  username.setAttribute("class", "fw-bold mb-2");
  username.innerText = data[i].firstName + " " + data[i].lastname;
  var rollSection = document.createElement("div");
  rollSection.setAttribute("class", "row g-2 mb-2");
  var rollchip = document.createElement("div");
  rollchip.setAttribute("class", "col-sm-6");
  var badge = document.createElement("span");
  badge.setAttribute("class", "badge bg-primary bg-gradient mb-2");
  var badgeicon = document.createElement("i");
  badgeicon.setAttribute("class", "bi bi-hash me-1");
  var badgevalue = document.createTextNode(`Roll No:${data[i].rollnumber}`);
  badge.appendChild(badgeicon);
  badge.appendChild(badgevalue);
  rollchip.appendChild(badge);
  rollSection.appendChild(rollchip);
  var cnicsec = document.createElement("div");
  cnicsec.setAttribute("class", "col-sm-6");
  var cardbadge = document.createElement("span");
  cardbadge.setAttribute("class", "badge bg-secondary bg-gradient mb-2");
  var cardicon = document.createElement("i");
  cardicon.setAttribute("class", "bi bi-credit-card-2-front me-1");
  var nicnode = document.createTextNode(`NIC: ${data[i].nic}`);
  cardbadge.append(cardicon);
  cardbadge.appendChild(nicnode);
  cnicsec.appendChild(cardbadge);
  var email = document.createElement("p");
  email.setAttribute("class", "mb-1");
  var emailicon = document.createElement("i");
  emailicon.setAttribute("class", "bi bi-envelope me-2");
  var emailnode = document.createTextNode(data[i].email);
  email.appendChild(emailicon);
  email.appendChild(emailnode);
  var dob = document.createElement("p");
  dob.setAttribute("class", "mb-1");
  var dobicon = document.createElement("i");
  dobicon.setAttribute("class", "bi bi-calendar me-2");
  var dobnode = document.createTextNode(`DOB: ${data[i].dob}`);
  dob.appendChild(dobicon);
  dob.appendChild(dobnode);
  carddetails.appendChild(username);
  carddetails.appendChild(rollSection);
  carddetails.appendChild(cnicsec);
  carddetails.appendChild(email);
  carddetails.appendChild(dob);
  cardinner.appendChild(carddetails);
  var cardbar = document.createElement("div");
  cardbar.setAttribute(
    "class",
    "id-card-bar-landscape position-absolute bottom-0 start-0 w-100"
  );
  card.appendChild(cardinner);
  cardinner.appendChild(cardbar);
  parent.appendChild(card);
}
