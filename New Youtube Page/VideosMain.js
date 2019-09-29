const URLIDS = "";

removeLoading();
function removeLoading() {
  var id = setInterval(frameR, 50);
  var el = document.getElementById("Loading");

  var scrollDown = 50;
  var Opacity = 1;
  function frameR() {
    scrollDown++;
    Opacity -= 0.1;
    el.style.top = scrollDown + "%";
    el.style.opacity = Opacity;
  }
  //el.remove();
}
function addVidsToFrame() {
  var btn = document.createElement("iframe");
  btn.id = "Video";
  btn.src = "https://www.youtube.com/embed/" /*TODO ADD ID OF VID HERE*/;
  btn.width = "560";
  btn.height = "315"; //TODO find out if it needs this to be a string and make it a easy change varible
  btn.frameBorder = "0";
  btn.allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  btn.allowFullscreen = true;

  window.location.replace("/Videos.html");

  document.body.appendChild(btn);
}

//<iframe width="560" height="315" src="https://www.youtube.com/embed/JLXGS9B_gzE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
