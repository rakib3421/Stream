const videoPlayer = document.querySelector('video');
const liveIndicator = document.createElement('div');
liveIndicator.classList.add('live-indicator');

videoPlayer.addEventListener('play', function() {
    videoPlayer.parentNode.appendChild(liveIndicator);
});

videoPlayer.addEventListener('pause', function() {
   
