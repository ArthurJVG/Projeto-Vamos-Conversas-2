
//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBTDneQx03wd7e1i3JPl4Tr-K9AWpN-odY",
  authDomain: "aula-c100-para-sala-do-kwitter.firebaseapp.com",
  databaseURL: "https://aula-c100-para-sala-do-kwitter-default-rtdb.firebaseio.com",
  projectId: "aula-c100-para-sala-do-kwitter",
  storageBucket: "aula-c100-para-sala-do-kwitter.appspot.com",
  messagingSenderId: "122817790861",
  appId: "1:122817790861:web:fc8185f30bfcb8442af3c4",
  measurementId: "G-N4KFWE88CB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
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

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}