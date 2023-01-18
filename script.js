var currentSlide = 1;
var pictureName = "image1";
var pictureText = "textForImage1";
var innerPictureText = "innerimagetext1";

setInterval(forwardPicture, 10000);

function rotatePicture(direction) {
  document.getElementById(pictureName).classList.remove("showImage");
  document.getElementById(pictureName).classList.add("hideImage");
  document.getElementById(pictureText).classList.add("hideImage");
  document.getElementById(innerPictureText).classList.remove("middle");
  document.getElementById(innerPictureText).classList.add("hideImage");

  currentSlide = currentSlide + direction;
  if (currentSlide == 5) {
    currentSlide = 1;
  } else if (currentSlide == 0) {
    currentSlide = 4;
  }
  pictureName = "image" + currentSlide;
  pictureText = "textForImage" + currentSlide;
  innerPictureText = "innerimagetext" + currentSlide;
  document.getElementById(pictureName).classList.remove("hideImage");
  document.getElementById(pictureText).classList.remove("hideImage");
  document.getElementById(pictureName).classList.add("showImage");
  document.getElementById(innerPictureText).classList.remove("hideImage");
  document.getElementById(innerPictureText).classList.add("middle");
}

function reversePicture() {
  rotatePicture(-1);
}

function forwardPicture() {
  rotatePicture(1);
}
