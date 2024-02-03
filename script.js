console.log("Welcome to Spotify");

// Variables 
let songindex = 1;
let audioelement = new Audio('music/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');


let songs = [
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
    {SongName:"song" , filepath:"music/1.mp3" , coverpath:"images/1.jpg"},
]


 audioelement.play();

//Play/pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        // masterplay.classList.remove('fa-play-circle');
        // masterplay.classList.add('fa-pause-circle');
    }else{
        audioelement.pause();
        // masterplay.classList.remove('fa-pause-circle');
        // masterplay.classList.add('fa-play-circle');
    }
})
//listen to events
myprogressbar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    // updating seekbar
})

