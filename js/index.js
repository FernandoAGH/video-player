const $video=document.querySelector('#video')
const $play=document.querySelector('#play')
const $pause=document.querySelector('#pause')
const $forward=document.querySelector('#forward')
const $backward=document.querySelector('#backward')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)

function handlePlay(){
     $video.play()
     $play.hidden = true
     $pause.hidden = false
    //console.log('click play')
   }
 function handlePause(){
     $video.pause()
     $play.hidden = false
     $pause.hidden = true
   // console.log('click pause')
 }

 $forward.addEventListener('click',handleForward)
 $backward.addEventListener('click',handleBackward)

 function handleBackward(){
     $video.currentTime = $video.currentTime-10
    //$play.hidden = false
    //$pause.hidden = true
   console.log('click Backward')
}
function handleForward(){
    $video.currentTime = $video.currentTime+10
    //$play.hidden = false
    //$pause.hidden = true
   console.log('click Forward')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleloaded)
$video.addEventListener('timeupdate',handletimeupdate)

function handleloaded(){
 $progress.max = $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handletimeupdate(){
  $progress.value =$video.currentTime
//console.log('tiempo actual' , $video.currentTime)
}

$progress.addEventListener('input',handleinput)

function handleinput(){
  $video.currentTime = $progress.value
  console.log($progress.value)
}