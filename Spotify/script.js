console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songname = document.getElementById('songname');

let songs = [
    {songname:"Let me love you", filepath: "songs/1.mp3"},
    {songname:"Faded", filepath: "songs/2.mp3"},
    {songname:"On My Way", filepath: "songs/3.mp3"},
    {songname:"Believer", filepath: "songs/4.mp3"},
    {songname:"Bella ciao", filepath: "songs/5.mp3"},
    {songname:"Cheap Thrills", filepath: "songs/6.mp3"},
    {songname:"Despacito", filepath: "songs/7.mp3"},
    {songname:"Memories", filepath: "songs/8.mp3"},
    {songname:"Astronaut in the ocean", filepath: "songs/9.mp3"},
    {songname:"Closer", filepath: "songs/10.mp3"},
]

songitem.forEach((element, i)=>{
     element.getElementsByClassName("songname")[0].innerHTML=songs[i].songname;

})

// audioElement.play();
//song play handle
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//event listening
audioElement.addEventListener('timeupdate',()=>{
      //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100
})

const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
       })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        songname.innerText = songs[songIndex].songname;
        audioElement.currentTime>=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
           
         })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0

    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    songname.innerText = songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    songname.innerText = songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

