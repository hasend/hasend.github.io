const music = document.querySelector("#musicplayer");
const musicPervBtn = document.querySelector("#arrowbtn #btn1");
const musicNextBtn = document.querySelector("#arrowbtn #btn3");
const musicVolumeUp = document.querySelector("#arrowbtn #btn2");
const musicVolumeDown = document.querySelector("#arrowbtn #btn4");

const playBtn = document.querySelector("#music #start");
const stopBtn = document.querySelector("#music #stop");

const MUSIC_COUNT = 2;
let currentAudio = 0;

function musicBtn(){
    playBtn.classList.remove(HIDDEN_CLASSNAME);
}

musicBtn();


function playAudio() {    
    if(music.currentTime === 0){
        music.volume = 0.2;
        music.loop = true;
        music.play();    
    } else {
        music.play();            
        
    }
    musicOn()
  }

function stopAudio() {
    stopBtn.classList.add(HIDDEN_CLASSNAME);
    music.pause();
}

function loadAudio() {
    stopBtn.classList.remove(HIDDEN_CLASSNAME);

    music.src = `musics/${currentAudio}.mp3`;
    music.load();
    playAudio();
}

function handleNextButtonClick() { 
    if (currentAudio < MUSIC_COUNT) {
      currentAudio += 1;
    } else {
      currentAudio = 0;
    }
    
    music.pause();
    loadAudio();
}

function handlePrevButtonClick() { 
    if (currentAudio > MUSIC_COUNT) {
      currentAudio -= 1;
    } else {
      currentAudio = 0;
    }
    
    music.pause();
    loadAudio();
}

function handleVolueUp(){
    let volumeUp = music.volume
    music.volume += 0.1
}

function handleVolueDown(){
    music.volume -= 0.1
}

playBtn.addEventListener("click", loadAudio);
stopBtn.addEventListener("click", stopAudio);
musicNextBtn.addEventListener("click", handleNextButtonClick);
musicPervBtn.addEventListener("click", handlePrevButtonClick);
musicVolumeUp.addEventListener("click", handleVolueUp)
musicVolumeDown.addEventListener("click", handleVolueDown)

const bar1 = document.querySelector(".bar1 span");
const bar2 = document.querySelector(".bar2 span");

const musics = [
    "그대에게 - 러블리즈(lovelyz)",
    "DUMB DUMB - 소미(somi)",
    "Hi High - 이달의 소녀(LOONA)",
  ];

function musicOn(){
    let songInfo = musics[currentAudio].split(" - ");
    bar1.innerText = songInfo[0];
    bar2.innerText = songInfo[1];
}

musicOn()