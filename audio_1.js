 function PlaySoundAndVideo(soundObj1, videoObj) {
    var soundAndVideo=document.getElementById(soundObj1,videoObj);
  soundAndVideo.play();
}
        function pauseAudio(){
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    audio1.pause();
    audio2.pause();
}
setTimeout(function(){ 
document.getElementById("audio1").play(); 
}, 10000)
