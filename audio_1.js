 function PlaySoundAndVideo(soundObj1, videoObj) {
    var soundAndVideo=document.getElementById(soundObj1,videoObj);
  soundAndVideo.play();
audio1.currentTime=6;
  audio1.play();
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
 audio1.play();
audio1.currentTime;
 audio2.currentTime;
audio1.currentTime = 0;
 audio2.currentTime = 0;
audio1.currentTime;
 audio2.currentTime;
}
