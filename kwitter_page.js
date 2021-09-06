//YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7PvDC7Np6K-5sGFXJBnn6pWHK9ATue98",
    authDomain: "project-kwitter-65c33.firebaseapp.com",
    databaseURL: "https://project-kwitter-65c33-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-65c33",
    storageBucket: "project-kwitter-65c33.appspot.com",
    messagingSenderId: "979102999782",
    appId: "1:979102999782:web:d7bd2a4fb71f3148b34727"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          Name:user_name,
          Message:msg,
          Like:0
    });
    document.getElementById("msg").value = "";
}