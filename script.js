console.log("Welcome to Spotify");
//Intialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));


let song = [
    {songName: "Tere Hawale", filePath:"songs/1.mp3 ",coverPath:"cover/1.jpg"},
    {songName: "Phir Na Aisi Raat Aayegi", filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName: "Maan Meri Jaan", filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName: "Natarang-Ubha", filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName: "Phero-Na-Najariya", filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName: "Shauq-Hai-bada", filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName: "Tere Naina", filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},


]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=song[i].coverPath;
    element.getElementsByClassName("songName")[0].src=song[i].songName;
    

})


//audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Event 
audioElement.addEventListener('timeupdate',()=>{
   
    // update seekbar
    Progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;

})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='songs/${songIndex +1}.mp3';
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex +=1;

    }
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;

    }
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



