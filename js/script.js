var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const closeWind = document.getElementById("closeWindow");
const wind = document.getElementsByClassName('windowCool');
closeWind.addEventListener('click', function () {
  wind[i].classList.add("closeWindClose");
})

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAvJOql63fXjJ8cEfc2LVNtCzAZ-G78sVQ",
  authDomain: "portfolio-a9d8b.firebaseapp.com",
  databaseURL: "https://portfolio-a9d8b-default-rtdb.firebaseio.com",
  projectId: "portfolio-a9d8b",
  storageBucket: "portfolio-a9d8b.appspot.com",
  messagingSenderId: "834702290838",
  appId: "1:834702290838:web:3388ec4c0650671c3137b7",
  measurementId: "G-7XDG6CM4ZT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('contactFormTwo').addEventListener('submit', submitFormTwo);

function submitFormTwo(e) {
  e.preventDefault();

  var name = getInputVal('name');
  var email = getInputVal('email')
  var message = getInputVal('yourMessageSEc')

  saveMessage(name, email, message);
  wind[i].classList.remove("closeWindClose");

}

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal('yourName');
  var email = getInputVal('yourEmail')
  var message = getInputVal('yourMessage')

  saveMessage(name, email, message);
  wind[i].classList.remove("closeWindClose");

}

function getInputVal(id) {
  return document.getElementById(id).value
}

function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}

