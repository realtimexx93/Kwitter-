 var firebaseConfig = {
    apiKey: "AIzaSyA_vwThzHS4OnRBI12_4yANPO8I1hWIk2w",
    authDomain: "kwitter-social-app.firebaseapp.com",
    databaseURL: "https://kwitter-social-app-default-rtdb.firebaseio.com",
    projectId: "kwitter-social-app",
    storageBucket: "kwitter-social-app.appspot.com",
    messagingSenderId: "613977004832",
    appId: "1:613977004832:web:9ab26ab2824f4f13a09545",
    measurementId: "G-YCY7LVJ49X"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update ({
        purpose : "adding user"
    });
}