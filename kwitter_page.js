//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+"value = "+like+" onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+= row;

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      console.log(likes);
      //updated_likes = Number(likes)+1;
      likes = Number(likes)+1;
      //console.log(updated_likes);
      console.log(likes);
      firebase.database().ref(room_name).child(button_id).update({
            //like: updated_likes
            like: likes
      });
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}