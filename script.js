function playAll(songNumber) {
    var playPauseBtn = document.getElementById("play-pause");
    var audioElement = document.getElementById("song");
    var songFileName = "music/" + songNumber + ".mp3";
    var songCurrentlyPlaying=document.getElementById("song"+songNumber)
    if (audioElement.getAttribute("src") == songFileName && !audioElement.paused) {
        audioElement.pause();
        playPauseBtn.innerHTML="<img src='image/play-button.svg'>";
        songCurrentlyPlaying.classList.remove("highlight");

    }
    else {
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playPauseBtn.innerHTML="<img src='image/pause-button.svg'>";
        songCurrentlyPlaying.classList.add("highlight");
    }

}

function playAudio(){
    var playPauseBtn = document.getElementById("play-pause");
    var audio = document.getElementById("song");

    if(audio.paused){
        audio.play();
        playPauseBtn.innerHTML="<img src='image/pause-button.svg'>";
       
    }
    else{
        audio.pause();
        playPauseBtn.innerHTML="<img src='image/play-button.svg'>";
    }
}