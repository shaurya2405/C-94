var firebaseConfig = {

    apiKey: "AIzaSyDgrzZQeXWDfCBEWmL8U-6SVxplx0MiNrQ",
  
    authDomain: "c-94-practice-activity-cb021.firebaseapp.com",
  
    databaseURL: "https://c-94-practice-activity-cb021-default-rtdb.firebaseio.com",
  
    projectId: "c-94-practice-activity-cb021",
  
    storageBucket: "c-94-practice-activity-cb021.appspot.com",
  
    messagingSenderId: "21128229286",
  
    appId: "1:21128229286:web:8e6460dd6b5e7fade0df67"
  
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser() 
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});  
}