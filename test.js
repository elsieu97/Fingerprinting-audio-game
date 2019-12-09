function test(){
var b = document.getElementById('score').value, url = 'https://elsieu97.github.io/Fingerprinting-audio-game/Game2.html?score=' + encodeURIComponent(b);
var c = document.getElementById('points').value, url = 'https://elsieu97.github.io/Fingerprinting-audio-game/Game2.html?points=' + encodeURIComponent(c);
document.location.href = url;
}
