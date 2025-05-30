//ajout de la fausse API aec tous les liens des radios aléatoires//

let radio;
const radioCategories = {
  tech: [
    "https://traxx020.ice.infomaniak.ch/traxx020-low.mp3",
    "http://stream.srg-ssr.ch/m/option-musique/mp3_128",
    "https://maxxima.mine.nu/maxxima.mp3",
    "https://strm112.1.fm/deephouse_mobile_mp3?aw_0_req.gdpr=true",
    "https://stream.electroradio.fm/192k",
    "https://stream01.my105.ch/my105djradio.mp3"
  ],
  chill: [
    "https://stream.srg-ssr.ch/m/rsj/mp3_128",
    "http://strm112.1.fm/chilloutlounge_mobile_mp3",
    "https://strm112.1.fm/chilloutlounge_mobile_mp3?aw_0_req.gdpr=true",
    "https://radiolac.ice.infomaniak.ch/radiolac-high.mp3"
  ],
  popRockRnb: [
    "http://stream.srg-ssr.ch/m/couleur3/mp3_128",
    "https://stream01.my105.ch/my105djradio.mp3",
    "http://spoonradio.ice.infomaniak.ch/spoonradio-hd.mp3",
    "https://vintageradio.ice.infomaniak.ch/vintageradio-high.mp3",
    "https://rockitradio.ice.infomaniak.ch/rockitradio-high.mp3",
    "https://chmedia.streamabc.net/79-argovia-mp3-192-3024993?sABC=6830752o%231%231748006100264_45137534...",
    "https://traxx016.ice.infomaniak.ch/traxx016-low.mp3"
  ],
  classical: [
    "https://stream.srg-ssr.ch/m/rsc_fr/mp3_128",
    "https://strm112.1.fm/baroque_128"
  ]
};

// Couleurs spécifiques pour chaque catégorie
const categoryColors = {
  tech: 'rgb(0,255,0)',        // Vert pour Tech
  chill: 'rgb(0,0,255)',       // Bleu pour Chill
  popRockRnb: 'rgb(255,0,255)', // Magenta pour Pop/Rock/RnB
  classical: 'rgb(128,0,128)'   // Violet pour Classical
};
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
  noStroke();
}
function setup() {
  radio = createAudio();
  radio.volume(1);
  radio.hide();
  
  document.getElementById('button-tech').addEventListener('click', () => playRandomRadio('tech'));
  document.getElementById('button-chill').addEventListener('click', () => playRandomRadio('chill'));
  document.getElementById('button-popRockRnb').addEventListener('click', () => playRandomRadio('popRockRnb'));
  document.getElementById('button-classical').addEventListener('click', () => playRandomRadio('classical'));
}

function playRandomRadio(category) {
  if (!radioCategories[category]) return;
  
  const stations = radioCategories[category];
  const randomURL = random(stations);
  
  radio.elt.src = randomURL;
  radio.play();
  
  console.log(`Now playing [${category}]: ${randomURL}`);
  
  // Appliquer la couleur spécifique à la catégorie
  document.documentElement.style.setProperty('--border-color', categoryColors[category]);
  
  // Afficher la catégorie dans la bannière
  updateBanner(category);
  
  document.querySelectorAll('.speaker-small').forEach(speaker => speaker.classList.add('active'));

}

function updateBanner(category) { //recupère un éléemnt HTML//
  const banner = document.getElementById('name-banner');
  const categoryNames = {
    tech: 'ELECTRO',
    chill: 'CHILL',
    popRockRnb: 'POP ROCK RNB',
    classical: 'CLASSIC'
  };
  
  if (banner) {
    banner.textContent = categoryNames[category];
    banner.style.color = categoryColors[category];
  }
}

function togglePlay() {
  if (radio && radio.elt.src) {
    if (radio.elt.paused) {
      radio.play();
    } else {
      radio.pause();
    }
  }
}
function windowResized () {
  resizeCanvas (windowWidth, windowHeight)
}