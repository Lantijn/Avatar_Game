// VARIABELEN:


const waterknop = document.getElementById("waterknop");
const aardeknop = document.getElementById("aardeknop");
const vuurknop = document.getElementById("vuurknop");
const luchtknop = document.getElementById("luchtknop");
const schildknop = document.getElementById("schildknop");
const stateknop = document.getElementById("stateknop");
const muziekknop = document.getElementById("muziekknop");
const zwaktemenu = document.getElementById("zwaktemenu");
const reloadknop = document.getElementById("reloadknop");
const vijandElement = document.getElementById("vijand");
const getalVeld = document.getElementById("punten");
let getal = 0;
let muziekAan = false;

const vijandAfbeeldingen = [
    "images/karakter/azula.png",
    "images/karakter/zhao.png",
    "images/karakter/mai.png",
    "images/karakter/bluespirit.png",
    "images/karakter/firelordozai.png",
    "images/karakter/tylee.png",
    "images/karakter/suki.png",
    "images/karakter/jet.png",
    "images/karakter/haru.png",
    "images/karakter/earthkingdomzuko.png",
    "images/karakter/zuko.png",
    "images/karakter/dragonofthewest.png",
    "images/karakter/toph.png",
    "images/karakter/spaceswordsokka.png",
    "images/karakter/zuko.png",
  ];
  // plaatjes gedownload van: https://www.softicons.com/culture-icons/avatar-minis-icons-by-joumana-medlej
  
const muziek = new Audio();
  muziek.src = "sound/gevechtmuziek.mp3";
  
const wateraudio = new Audio();
  wateraudio.src = "sound/water.mp3";
  
const aardeaudio = new Audio();
  aardeaudio.src = "sound/aarde.mp3";
  
const vuuraudio = new Audio();
  vuuraudio.src = "sound/vuur.mp3";
  
const luchtaudio = new Audio();
  luchtaudio.src = "sound/lucht2.mp3";
  
const schildaudio = new Audio();
  schildaudio.src = "sound/schild.mp3";
  
const stateaudio = new Audio();
  stateaudio.src = "sound/state.mp3";
  // audio gedownload van youtube.com
//  audio toevoegen: chatgpt




// EVENTLISTENERS:

waterknop.addEventListener("click", function () {
  startaanval();
  wateraudio.play();
  changeaanval("images/element/water2.png");
  avatarstate("images/karakter/aang.png");
  vijandElement.classList.add("vijandVerslagen");
  verhoogGetal();
});

aardeknop.addEventListener("click", function () {
  startaanval();
  aardeaudio.play();
  changeaanval("images/element/aarde.png");
  avatarstate("images/karakter/aang.png");
  vijandElement.classList.add("vijandVerslagen");
  verhoogGetal();
});

vuurknop.addEventListener("click", function () {
  startaanval();
  vuuraudio.play();
  changeaanval("images/element/vuur.png");
  avatarstate("images/karakter/aang.png");
  vijandElement.classList.add("vijandVerslagen");
  verhoogGetal();
});

luchtknop.addEventListener("click", function () {
  startaanval();
  luchtaudio.play();
  changeaanval("images/element/lucht.png");
  avatarstate("images/karakter/aang.png");
  vijandElement.classList.add("vijandVerslagen");
  verhoogGetal();
});

schildknop.addEventListener("click", function () {
  startaanval();
  schildaudio.play();
  changeaanval("images/style/schild.png");
  avatarstate("images/karakter/airscooteraang.png");
  verhoogGetal();
});

stateknop.addEventListener("click", function () {
  startaanval();
  stateaudio.play();
  changeaanval("images/element/super.png");
  avatarstate("images/karakter/stateavatar.png");
  vijandElement.classList.add("vijandVerslagen");
  verhoogGetal();
});

muziekknop.addEventListener("click", function () {
  toggleMuziek();
});

zwaktemenu.addEventListener("click", function () {
  toggleZwakteMenu();
});

reloadknop.addEventListener("click", function () {
  location.reload();
});

vijandElement.addEventListener("animationend", function () {
  vijandElement.classList.remove("vijandVerslagen");
  const randomIndex = Math.floor(Math.random() * vijandAfbeeldingen.length);
  const randomAfbeelding = vijandAfbeeldingen[randomIndex];
  vijandElement.querySelector("img").src = randomAfbeelding;
});




// FUNCTIONS

function verhoogGetal() {
  getal = getal + 1;
  getalVeld.textContent = getal;
}
// score verhogen komt van de mystery number opdracht

function selecteerWillekeurigeVijandAfbeelding() {
  const randomIndex = Math.floor(Math.random() * vijandAfbeeldingen.length);
  const randomAfbeelding = vijandAfbeeldingen[randomIndex];
  vijandElement.querySelector("img").src = randomAfbeelding;
}

function changeaanval(fileName) {
  let img = document.querySelector("#aanvalanimatie");
  img.setAttribute("src", fileName);
}

function avatarstate(fileName) {
  let img = document.querySelector("#aangplayer");
  img.setAttribute("src", fileName);
}

function startaanval() {
  let aanvalanimatieElement = document.getElementById("aanvalanimatie");
  aanvalanimatieElement.style.display = "block";
  aanvalanimatieElement.style.animation = "none";
  setTimeout(() => {
    aanvalanimatieElement.style.animation = "";
    setTimeout(() => {
      aanvalanimatieElement.style.display = "none";
      let aangplayerElement = document.getElementById("aangplayer");
      aangplayerElement.src = "images/karakter/airscooteraang.png";
    }, 1200);
  }, 1);
}

function toggleMuziek() {
  let muziekKnop = document.getElementById("muziekknop");
  let muziekAfbeelding = document.getElementById("muziekafbeelding");

  if (!muziekAan) {
    muziek.play();
    muziekAan = true;
    muziekAfbeelding.src = "images/style/pauzeknop.png";
  } else {
    muziek.pause();
    muziekAan = false;
    muziekAfbeelding.src = "images/style/playknop.png";
  }
}

function toggleZwakteMenu() {
  const zwakteAfbeelding = document.getElementById("zwakteafbeelding");
  if (zwakteAfbeelding.style.display === "none") {
    zwakteAfbeelding.style.display = "block";
  } else {
    zwakteAfbeelding.style.display = "none";
  }
}


