console.log('welcome to music app');


//initialize the variable
let songindex;
let audioElement = new Audio('songes/7.mp3');
let masterPlay = document.getElementById('masterPlay');
let myPorgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [{songName:"Baila Conmigo",filePath:"songes/7.mp3",coverPath:"covers/1.jpg"},
{songName:"Believer",filePath:"songes/8.mp3",coverPath:"covers/2.jpg"},
{songName:"Breaking The Rules",filePath:"songes/9.mp3",coverPath:"covers/3.jpg"},
{songName:"Elimi Tut",filePath:"songes/10.mp3",coverPath:"covers/4.jpg"},
{songName:"Gulabi Aakhen",filePath:"songes/11.mp3",coverPath:"covers/5.jpg"},
{songName:"Let Me Love You",filePath:"songes/12.mp3",coverPath:"covers/6.jpg"}];


//audioElement.play(); 
//handle play/pause click 
masterPlay.addEventListener('click',()=>{

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

//Listen the events
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    ///console.log(progress);
    myPorgressbar.value=progress;
})

myPorgressbar.addEventListener('change',()=>{

    audioElement.currentTime = myPorgressbar.value * audioElement.duration/100;

})

//for changing cover and songsname using forEach

songItems.forEach((element,i)=>{
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//creating a function to play all song

const  playAllSongs=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })

}





Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        playAllSongs();
        songindex = parseInt(e.target.id);
        masterSongName.innerText = songs[songindex-7].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songes/${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=12 ){
        songindex = 7;
    }
    else{
        songindex +=1;
    }
    audioElement.src = `songes/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-7].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=7 ){
        songindex = 7;
    }
    else{
        songindex -=1;
    }
    audioElement.src = `songes/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-7].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


//updating song name what ever visiable next of gif










