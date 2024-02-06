console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "music/1.mp3", coverPath: "images/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "music/2.mp3", coverPath: "images/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "music/3.mp3", coverPath: "images/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "music/4.mp3", coverPath: "images/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "music/5.mp3", coverPath: "images/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "music/6.mp3", coverPath: "images/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "music/7.mp3", coverPath: "images/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "music/8.mp3", coverPath: "images/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "music/9.mp3", coverPath: "images/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "music/10.mp3", coverPath: "images/10.jpg"},
]

songItems.forEach((element, i) => {
    // Check if there is an image element with a tag name "img"
    const imgElement = element.getElementsByTagName("img")[0];
    
    // Check if the current index is valid for the songs array
    if (songs[i]) {
        // Update the src attribute with the coverPath from the songs array
        imgElement.src = songs[i].coverPath;

        // Check if there is an element with the class "songName"
        const songNameElement = element.getElementsByClassName("songName")[0];

        // Update the text content with the songName from the songs array
        songNameElement.innerText = songs[i].songName;
    } else {
        console.error(`No data available for index ${i} in the songs array.`);
    }
})

 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('images/circle-play-regular.svg');
        masterPlay.classList.add('images/circle-pause-regular.svg');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('images/circle-pause-regular.svg');
        masterPlay.classList.add('images/circle-play-regular.svg');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('images/circle-pause-regular.svg');
        element.classList.add('images/circle-play-regular.svg');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('images/circle-play-regular.svg');
        e.target.classList.add('images/circle-pause-regular.svg');
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('images/circle-play-regular.svg');
        masterPlay.classList.add('images/circle-pause-regular.svg');
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
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('images/circle-play-regular.svg');
    masterPlay.classList.add('images/circle-pause-regular.svg');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('images/circle-play-regular.svg');
    masterPlay.classList.add('images/circle-pause-regular.svg');
})