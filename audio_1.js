 function PlaySoundAndVideo(soundObj1,soundObj2,videoObj) {
    var soundAndVideo=document.getElementById(soundObj1,soundObj2,videoObj);
  soundAndVideo.play();
}
    function pauseAudio(){
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    audio1.pause();
    audio2.pause();
}
function rewind(){
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
 audio2.play();
audio1.currentTime;
 audio2.currentTime;
audio1.currentTime = 6;
 audio1.play();
 audio2.currentTime = 0;
audio1.currentTime;
 audio2.currentTime;
}

setTimeout(function(){ 
document.getElementById("audio1").play(); 
}, 5000)
