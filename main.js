/*create a function that recives to parameters and chose one number between*/
function choose(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/* a function that detects the scroll and calls the append image function*/
window.onload = function () {
  window.onscroll = function () {
    if (document.body.scrollTop > -10000) {
      setTimeout(createGallery(), 1000);
    }
  };
};

/*a function to create this element <div class="col-md-4">*/
function createGallery() {
  var gallery = document.createElement("div");
  gallery.className = "col-md-4";
  var thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";
  thumbnail.style.display = "flex";
  thumbnail.style.flexDirection = "column";
  var img = document.createElement("img");
  img.className = "galeryImage";
  img.loading = "lazy";
  img.style.borderRadius = "10px";
  img.src =
    "https://source.unsplash.com/random/" +
    choose(700, 1300) +
    "x" +
    choose(700, 1300);
  img.style.draggable = "false";
  var caption = document.createElement("div");
  caption.className = "caption";
  var h3 = document.createElement("h3");
  var downloadBtn = document.createElement("I");
  downloadBtn.className = "fa fa-download fa-1x downloadBtn";
  ///change the text of h3 and p to image and random image
  h3.innerHTML = "Image";
  h3.style.marginLeft = "10px";
  caption.innerHTML = "Random Image";
  var heart = document.createElement("I");
  heart.className = "fa fa-heart fa-2x";
  heart.style.color = "#FD1D1D";
  heart.style.marginLeft = "10px";
  heart.style.cursor = "pointer";
  var shareBtn = document.createElement("I");
  shareBtn.className = "fa fa-share-alt fa-2x shareBtn";
  caption.appendChild(heart);
  caption.appendChild(shareBtn);
  h3.appendChild(downloadBtn)
  thumbnail.appendChild(img);
  thumbnail.appendChild(caption);
  thumbnail.appendChild(h3);
  gallery.appendChild(thumbnail);
  document.body.appendChild(gallery);
}
