/*Name this external file gallery.js*/

function upDate(previewPic) {
  console.log("upDate triggered");
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo triggered");
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

function prepareGallery() {
  console.log("Page loaded. Running prepareGallery...");

  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
