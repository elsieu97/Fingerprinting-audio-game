// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBwYlI00S8-ID6ukjrlqh6a9asI8Q3jWTg",
    authDomain: "audio2-692f6.firebaseapp.com",
    databaseURL: "https://audio2-692f6.firebaseio.com",
    projectId: "audio2-692f6",
    storageBucket: "audio2-692f6.appspot.com",
    messagingSenderId: "780645088371",
    appId: "1:780645088371:web:16849665c20ea51ce03e06",
    measurementId: "G-NBWHV2BS9H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 firebase.database();
firebase.auth();

//reference messages collection
var messageRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('info').addEventListener('submit', submitForm);

//submit question
function submitForm(e){
    e.preventDefault();
    
    //get values
    var question= getInputVal('question');
    var name = getInputVal('name');
  
    // save message
    saveMessage(question, name);
  
  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('info').reset();
  
}

//function to get values
function getInputVal(id){
   return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(question){
 var newMessageRef=messageRef.push();
    newMessageRef.set({
        question: question,
        name: name
    });
                                    
}
