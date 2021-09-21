/*create a function that recives to parameters and chose one number between*/
function choose(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/* a function that detects the scroll and calls the append image function*/
window.onscroll = function () {
  if (document.body.scrollTop > -0.01) {
    createGallery()
  }
};
/*a function to create this element <div class="col-md-4">*/
function createGallery() {
  var loading = document.createElement("img");
  loading.src = "/resources/images/loader.gif";
  loading.className = "loading";
  var gallery = document.createElement("div");
  gallery.className = "col-md-4";
  var thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";
  var img = document.createElement("img");
  img.className = "galeryImage";
  img.src =
    "https://source.unsplash.com/random/" +
    choose(900, 1900) +
    "x" +
    choose(900, 1900);
  img.draggable = false;
  img.loading = "lazy";
  img.alt = img.src;
  var caption = document.createElement("div");
  caption.className = "caption";
  var h3 = document.createElement("h3");
  var download = document.createElement("a");
  download.className = "download";
  ///make the download href equal to the current image src
  download.href = img.src;
  var downloadBtn = document.createElement("I");
  downloadBtn.className = "fa fa-download fa-2x downloadBtn";
  downloadBtn.href = img.src;
  h3.innerHTML = "Download";
  h3.className = "imageDownload";
  caption.innerHTML = "Random Image";
  var heart = document.createElement("I");
  heart.className = "fa fa-heart heart fa-2x";
  var shareBtn = document.createElement("I");
  shareBtn.className = "fa fa-share-alt fa-2x shareBtn";
  thumbnail.appendChild(loading);
  caption.appendChild(heart);
  caption.appendChild(shareBtn);
  h3.appendChild(download);
  download.appendChild(downloadBtn);
  img.onload = function () {
    loading.remove();
  };
  thumbnail.appendChild(img);
  thumbnail.appendChild(caption);
  thumbnail.appendChild(h3);
  gallery.appendChild(thumbnail);
  document.body.appendChild(gallery);
}
