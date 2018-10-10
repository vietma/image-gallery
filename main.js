var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");

btn = document.querySelector("button");
var overlay = document.querySelector(".overlay");

/* Looping through images */
for (var i = 0; i < 5; i++) {
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/pic" + (i + 1) + ".jpg");
  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute("src");
    displayImage(imgSrc);
    // displayedImage.setAttribute("src", e.target.getAttribute("src"));
  };
  thumbBar.appendChild(newImage);
}

function displayImage(src) {
  displayedImage.setAttribute("src", src);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(e) {
  var btnClass = e.target.getAttribute("class");
  if (btnClass === "dark") {
    e.target.setAttribute("class", "light");
    e.target.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    e.target.setAttribute("class", "dark");
    e.target.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
};
