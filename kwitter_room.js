
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDzZbdXOw5pv5-LvMpX9dsQMrapm7wGMeA",
      authDomain: "switter-576b5.firebaseapp.com",
      databaseURL: "https://switter-576b5-default-rtdb.firebaseio.com",
      projectId: "switter-576b5",
      storageBucket: "switter-576b5.appspot.com",
      messagingSenderId: "780453529077",
      appId: "1:780453529077:web:cce8b0b16ee1032e040cbc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
row = "<div class = 'room_name' id = "+ Room_names + " onclick = 'redirectToRoomName(this.id)'> #>"+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName (name){
      console.log("redirecttoroomname");
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}