var img_canvas;
var file_inp;
var img;
var gray_img;
var red_img;
var rainbow_img;
var amer_flag_img;

function imageIsLoaded(img) {
  if (img == null) {
    return false;
  }
  else {
    return true;
  }
}

function uploadimage() {
  img_canvas = document.getElementById("photo_canvas");
  file_inp = document.getElementById("finput");
  img = new SimpleImage(file_inp);
  gray_img = new SimpleImage(file_inp);
  red_img = new SimpleImage(file_inp);
  rainbow_img = new SimpleImage(file_inp);
  img.drawTo(img_canvas);
}

function filterGray() {
  if (imageIsLoaded(gray_img)) {
    for (var pixel of img.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);  
  }
  img.drawTo(img_canvas);
  }
  else {
    alert("Please upload an image first!");
  }
}

function loadgray() {
  if (imageIsLoaded(gray_img)) {
    filterGray();
    gray_img.drawTo(img_canvas);
  }
  else {
    alert("Please upload image first!");
  }
}

function filterRed() {
  if (!imageIsLoaded(img)) {
    alert("Please upload an image first!");
  }
  else {
    for (var pixel of img.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen((avg * 2) - 255);
        pixel.setBlue((avg * 2) - 255);
      }
    }
  img.drawTo(img_canvas);
  }
}

function loadRed() {
  filterRed();
  red_img.drawTo(img_canvas);
}

function filterRainbow() {
  if (!imageIsLoaded(img)) {
    alert("Please upload an image first!");
  }
  else {
    for (var pixel of img.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (pixel.getY() < (1 / 7) * img.getHeight()) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else if ((pixel.getY() >= (1 / 7) * img.getHeight() && (pixel.getY() < (2 / 7) * img.getHeight()))) {
        pixel.setRed(avg * 2);
        pixel.setGreen(avg * 0.8);
        pixel.setBlue(0);
      }
      else if ((pixel.getY() >= (2 / 7) * img.getHeight() && (pixel.getY() < (3 / 7) * img.getHeight()))) {
        pixel.setRed(avg * 2);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      }
      else if ((pixel.getY() >= (3 / 7) * img.getHeight() && (pixel.getY() < (4 / 7) * img.getHeight()))) {
        pixel.setRed(0);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      }
      else if ((pixel.getY() >= (4 / 7) * img.getHeight() && (pixel.getY() < (5 / 7) * img.getHeight()))) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(avg * 2);
      }
      else if ((pixel.getY() >= (5 / 7) * img.getHeight() && (pixel.getY() < (6 / 7) * img.getHeight()))) {
        pixel.setRed(0.8 * avg);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      else if ((pixel.getY() >= (6 / 7) * img.getHeight() && (pixel.getY() < (7 / 7) * img.getHeight()))) {
        pixel.setRed(1.6 * avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
      }
      
    }
    img.drawTo(img_canvas);
  }
}

function loadRainbow() {
  filterRainbow();
  rainbow_img.drawTo(img_canvas);
}

function filterAmerFlag() {
  if (!imageIsLoaded(img)) {
    alert("Please upload an image first!");
  }
  else {
    for (var pixel of img.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (pixel.getX() < img.getWidth() / 2 && pixel.getY() < img.getHeight() / 2) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(avg * 2);
      }
      else {
        if (pixel.getY() % 2 == 0) {
          pixel.setRed(avg * 2);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
        else {
          pixel.setRed(avg * 2);
          pixel.setGreen(avg * 2);
          pixel.setBlue(avg * 2);
        }
      }
    }
    img.drawTo(img_canvas);
  }
}

function loadAmerFlag() {
  filterAmerFlag();
  amer_flag_img.drawTo(img_canvas);
}

function resetimage() {
  if (imageIsLoaded(img)) {
    uploadimage();
  }
  else {
    alert("Please upload an image first!");
  }
}