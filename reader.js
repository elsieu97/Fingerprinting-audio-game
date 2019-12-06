// Create a reference with an initial file path and name
var storage = firebase.storage();
var pathReference = storage.ref('audio2/file.txt');
// Create a reference from a Google Cloud Storage URI
var gsReference = storage.refFromURL('gs://audio2/file.txt')
// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/audio2-692f6.appspot.com/o/file.txt?alt=media&token=07a333ff-6c07-4fa6-9a20-7d9a1f65b542');
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

