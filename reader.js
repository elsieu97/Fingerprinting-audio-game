// Create a reference with an initial file path and name
var storage = firebase.storage();
var pathReference = storage.ref('audio2/file.txt');
storageRef.child('audio2/file.txt').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'audio2/file.txt'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();

  // Or inserted into an <button> element:
  var button = document.getElementById('answer');
  button.src = url;
}).catch(function(error) {
  // Handle any errors
});

