const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('myAudio');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸️'; // mengganti emotikon ke "pause"
    } else {
        audio.pause();
        playBtn.textContent = '▶️'; // mengganti emotikon ke "play"
    }
});
