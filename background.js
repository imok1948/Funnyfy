const DELAY_IN_MS = 3000;
const VIDEO_LENGTH_IN_MS = 20000;


links = ["https://github.com/imok1948/imok1948.github.io/blob/main/Paisa%20hi%20paisa%20hoga.mp4?raw=true", "https://github.com/imok1948/imok1948.github.io/blob/main/best-ias-inspirational-video-abey-padhai-likhai-karo-ias-yas-bano-filmy-vibe_Fu1MFHKS.mp4?raw=true", "https://github.com/imok1948/imok1948.github.io/blob/main/cena.webm?raw=true", "https://github.com/imok1948/imok1948.github.io/blob/main/samajh-rahe-ho-na-app-meme-harsh-beniwal-memes-at-harsh-beniwal_xNmedOJb.mp4?raw=true"]

// links = ['./Paisa hi paisa hoga.mp4', './best-ias-inspirational-video-abey-padhai-likhai-karo-ias-yas-bano-filmy-vibe_Fu1MFHKS.mp4', './cena.webm', './samajh-rahe-ho-na-app-meme-harsh-beniwal-memes-at-harsh-beniwal_xNmedOJb.mp4'];


const VIDEO_HTML_STRING =
  "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.webm' type='video/webm'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.mp4' type='video/mp4'></video>";


function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

function funnyfy() {
  setTimeout(() => {
    const body = document.body;
    randomIndex = getRandomNumber(links.length);
    body.innerHTML = `<video autoplay loop style='height: 100vh; width: 100vw'><source src='${links[randomIndex]}' type='video/mp4'></video>`;
    body.style.backgroundColor = "black";
    setTimeout(() => {
      window.location.replace(document.URL);
    }, VIDEO_LENGTH_IN_MS);
  }, DELAY_IN_MS);
}

const chance = Math.floor(Math.random() * 100);
if (chance <= 10) {
  funnyfy();
}

