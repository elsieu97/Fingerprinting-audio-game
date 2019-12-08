// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0ZmEkJ-chGAG-BzqwNfmgaKkPyGl_DqU",
    authDomain: "read-24026.firebaseapp.com",
    databaseURL: "https://read-24026.firebaseio.com",
    projectId: "read-24026",
    storageBucket: "read-24026.appspot.com",
    messagingSenderId: "1080786106101",
    appId: "1:1080786106101:web:ddf656bfbd8d830a93f7bc",
    measurementId: "G-Z9DZ0389XQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//reference messages collection
var messageRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('question').addEventListener('submit', submitForm);

//submit question
function submitForm(e){
    e.preventDefault();
    
    //get values
    var question- getInputVal('question');
    // save message
    saveMessage(question);
}

//function to get values
function getInputVal(id){
   return document.getElementById(id).value;
}

//save message to firebase
function savemessage(question){
 var newMessageRef=messagesRef.push();
    newMessageRef.set({
        question: question
    });
                                    
}
    
