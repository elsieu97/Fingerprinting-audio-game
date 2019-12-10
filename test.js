function test(){
var b = document.getElementById('score').value, url = 'https://elsieu97.github.io/Fingerprinting-audio-game/Game2.html?score=';
var c = document.getElementById('points').value, url = 'https://elsieu97.github.io/Fingerprinting-audio-game/Game2.html?points=';
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
    document.getElementById('score').innerHTML = data.score;
    document.getElementById('points').innerHTML = data.points;
}
