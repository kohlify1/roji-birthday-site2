let tapCount = 0;

function tapHeart() {
  tapCount++;
  document.getElementById("counterText").innerText = `Taps: ${tapCount}/5`;
  
  if (tapCount === 5) {
    document.getElementById("surprise").classList.remove("hidden");

    // Optional audio 🎵
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    audio.play();
  }
}