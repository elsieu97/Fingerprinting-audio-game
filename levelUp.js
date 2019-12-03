function PlaySoundAndVideo2(soundObj3, videoObj) {
    var soundAndVideo2=document.getElementById(soundObj3,videoObj);
    soundAndVideo2.play();
}
        function pauseAudio2(){
    var audio3 = document.getElementById('audio3');
    var audio4 = document.getElementById('audio4');
    audio3.pause();
    audio4.pause();
}
        setTimeout(function(){ 
document.getElementById("audio3").play(); 
}, 5000)
