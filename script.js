const songs = [
  {
    title: "I love",
    file: "Malcolm Todd - Chest Pain (I Love) (Official Visualizer).mp3"
  }
];

const playlist = document.getElementById('playlist');
const nowPlaying = document.getElementById('now-playing');
const audio = document.getElementById('audio');

// Create list items for each song
songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.textContent = song.title;
  li.addEventListener('click', (e) => {
    playSong(index);
    createHeart(e.clientX, e.clientY);
  });
  playlist.appendChild(li);
});

function playSong(index) {
  const selectedSong = songs[index];
  audio.src = selectedSong.file;
  audio.play();
  nowPlaying.textContent = `Now Playing: ${selectedSong.title}`;
}

// Floating hearts on song click
function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.position = 'absolute';
  heart.style.left = `${x - 10}px`;
  heart.style.top = `${y - 10}px`;
  heart.style.fontSize = '24px';
  heart.style.zIndex = '999';
  heart.style.animation = 'floatUp 2s ease-out forwards';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2000);
}

// Background floating hearts
function generateBackgroundHearts() {
  const heartContainer = document.getElementById("heart-bg");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }, 300);
}

generateBackgroundHearts();
