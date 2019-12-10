function test(){
var b = document.getElementById('score').value, url = 'https://elsieu97.github.io/Fingerprinting-audio-game/Game2.html?score=' + encodeURIComponent(b);
var c = document.getElementById('points').value, url = 'https://elsieu97.github.io/Fingerprinting-audio-game/Game2.html?points=' + encodeURIComponent(c);
document.location.href = url;
}
function onLoad(){
var url = document.location.href,
params =url.split('?')[1].split('&'),
data ={},tmp;
for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('score').innerHTML = data.n;
    document.getElementById('points').innerHTML = data.n;
}
function encode(string) {
      var stringIsInvalid = string === undefined ||
                            typeof string !== 'string' ||
                            string.length < 1;

      if(stringIsInvalid) throw new Error('Cannot encodeURIComponent(string),'+
                                          ' string is invalid');

      return encodeURIComponent(string);
 }
