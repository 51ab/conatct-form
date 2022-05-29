// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCr5pR7CazbB6tvmgUbh-82ojM31e0WVNU",
  authDomain: "test-form-80d01.firebaseapp.com",
  projectId: "test-form-80d01",
  storageBucket: "test-form-80d01.appspot.com",
  messagingSenderId: "827963671434",
  appId: "1:827963671434:web:91844cac5a2f82f983be73"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//reference contactinfo collections
let contactInfo = firebase.database().ref("infos");
document.querySelector(".contact-form").addEventListener("submit", submitForm);
function submitForm(e)
{
e.preventDefault();
let name = document.querySelector(".name").value;
let email = document.querySelector(".email").value;
let message = document.querySelector(".message").value;
console.log(name, email, message);
saveContactInfo(name, email, message)
  document.querySelector(".contact-form").reset();

}
function saveContactInfo(name, email, message){
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
