const toggleSound = document.getElementById("toggleSound");
const audio = new Audio("/Assets/img/vd.aud/Life is Strange Remastered Collection Official Trailer Song_ _Carry You Home_.m4a");
let isPlaying = true;

toggleSound.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
});


const toggleVideo = document.getElementById("trailer");
const video = document.getElementById("Vdo");

toggleVideo.addEventListener("click", function () {
  if (isPlaying) {
    video.pause();
  } else {
    video.play();
  }
  isPlaying = !isPlaying;
});

const startVideo = document.getElementById("startVideo");

startVideo.addEventListener("click", function () {
  video.play();
});

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyF") {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  }
});

// const video = document.getElementById("fullscreenVideo");
// const videoContainer = document.getElementById("videoContainer");

// video.addEventListener("ended", function () {
//   videoContainer.style.opacity = 0;
// });

// videoContainer.addEventListener("transitionend", function () {
//   videoContainer.style.display = "none";
// });



