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

let email = document.querySelector(".email").value;
let password = document.querySelector(".password").value;
console.log( email, password);
saveContactInfo(email, password)
  document.querySelector(".contact-form").reset();

}
function saveContactInfo(email, password){
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    
    email: email,
   password: password
  });
}
