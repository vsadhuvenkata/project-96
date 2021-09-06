
//ADD YOUR FIREBASE LINKS HERE
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

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    
    
