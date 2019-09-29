var menuOpen = false;

function menuToggle() {
  //print("Opening");
  //var navBar = document.getElementById("NavBar");
  //navBar.style.top =

  var elem = document.getElementById("NavBar");
  var MainElems = document.getElementById("__Main");
  var MainDesc = document.getElementById("desc_Main");

  var Body = document.getElementById("Body");

  var pos = -250;
  var MainPos = 41;
  var id = setInterval(frame, 10);
  if (menuOpen) {
    menuOpen = false;
  } else {
    menuOpen = true;
  }
  function frame() {
    if (menuOpen == false) {
      /*elem.style.top = -250 + "px";
      MainElems.style.top = 40 + "%";
      MainDesc.style.top = 80 + "%";
      Body.style.backgroundSize = "100%";
    */

      if (MainPos == 40) {
        //clearInterval(id);
      } else {
        pos -= 10;
        MainPos -= 1;
        elem.style.top = pos + "px";
        MainElems.style.top = MainPos + "%";
        MainDesc.style.top = MainPos + 40 + "%";
        Body.style.backgroundSize = MainPos + 85 + "%";
      }
    } else {
      if (pos == 0) {
        //clearInterval(id);
      } else {
        pos += 10;
        MainPos += 1;
        elem.style.top = pos + "px";
        MainElems.style.top = MainPos + "%";
        MainDesc.style.top = MainPos + 40 + "%";
        Body.style.backgroundSize = MainPos + 85 + "%";
      }
    }
  }
}

function RedirectAnimate() {
  //TODO fix this funtion to make transition more smooth
  //print("Opening");
  //var navBar = document.getElementById("NavBar");
  //navBar.style.top =

  var elem = document.getElementById("NavBar");
  var MainElems = document.getElementById("__Main");
  var MainDesc = document.getElementById("desc_Main");

  var Body = document.getElementById("Body");

  var id = setInterval(frameR, 80);

  function frameR() {
    elem.style.top += 40 + "px";
    MainElems.style.top += 50 + "%";
    MainDesc.style.top += 40 + "%";
  }
}
//TODO add animations/loading screens
function redirectHome() {
  //RedirectAnimate();
  document.body.innerHTML = "";
  //document.body.style.background = "#000000";
  var btn = document.createElement("div");
  btn.id = "Loading";
  btn.innerHTML = "Loading";
  window.location.replace("/NewTestKWweb/Home.html");

  document.body.appendChild(btn);

  //Transition
  //sleep(1000);
}
function redirectProjects() {
  window.location.replace("/Projects.html");
}

const URLIDS = "";

removeLoading();
function removeLoading() {
  var id = setInterval(frameR, 10);
  var el = document.getElementById("Loading");
  var body = document.getElementById("Body");

  var scrollDown = 50;
  var Opacity = 1;
  var Bsize = 151;
  function frameR() {
    scrollDown++;
    if (Bsize > 125) {
      Bsize -= 1;
    }
    el.style.top = scrollDown + "%";
    el.style.opacity = Opacity;
    body.style.backgroundSize = Bsize + "%";
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

  window.location.replace("https://kevinwh0.github.io/NewTestKWweb/Home.html");

  document.body.appendChild(btn);
}

//<iframe width="560" height="315" src="https://www.youtube.com/embed/JLXGS9B_gzE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
