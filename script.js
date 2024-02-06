console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let music = [
    {songName: "Warriyo - Mortals", filePath: "music/1.mp3", coverPath: "images/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "music/2.mp3", coverPath: "images/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "music/3.mp3", coverPath: "images/3.jpg"},
    {songName: "Different Heaven ", filePath: "music/4.mp3", coverPath: "images/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "music/5.mp3", coverPath: "images/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "music/6.mp3", coverPath: "images/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "music/7.mp3", coverPath: "images/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "music/8.mp3", coverPath: "images/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "music/9.mp3", coverPath: "images/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "music/10.mp3", coverPath: "images/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = music[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = music[i].songName; 
})
 

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSongName.innerText = music[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})