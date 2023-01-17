var currentPicture = 1;
var currentTextBody = 1;
var pictureName = "image1"
var pictureText = "textForImage1"

setInterval(forwardPicture,10000)

function reversePicture(){
  document.getElementById(pictureName).classList.add("hideImage");
  document.getElementById(pictureText).classList.add("hideImage"); 
  currentPicture--;
  currentTextBody--;
  if(currentPicture == 0){
    currentPicture = 4;
    currentTextBody = 4;
  }
  pictureName = "image" + currentPicture;
  pictureText = "textForImage" + currentTextBody;
  document.getElementById(pictureName).classList.remove("hideImage");
  document.getElementById(pictureText).classList.remove("hideImage"); 
}

function forwardPicture(){
  document.getElementById(pictureName).classList.add("hideImage");
  document.getElementById(pictureText).classList.add("hideImage");
  currentPicture++;
  currentTextBody++;
  if(currentPicture == 5){
    currentPicture = 1;
    currentTextBody = 1;
  }
  pictureName = "image" + currentPicture;
  pictureText = "textForImage" + currentTextBody;

  document.getElementById(pictureName).classList.remove("hideImage");
  document.getElementById(pictureText).classList.remove("hideImage"); 
}