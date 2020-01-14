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
//!ANIMATION STAR STUFF STARTS
function setProperty(duration, X, Y) {
  var html = document.getElementsByTagName("html")[0];
  //html.style.setProperty("--animation-delay", duration + "s");
  html.style.setProperty("--zeroX", X + "px");
  html.style.setProperty("--zeroY", -Y + "px");
  html.style.setProperty("--DoneX", -X + "px");
  html.style.setProperty("--DoneY", Y + "px");

  //console.log(duration);
  //changeAnimationTime();
}
//var start = 0;
function changeAnimationTime() {
  const animationDuration = Math.round(Math.random() * 50);
  const X = Math.round(Math.random() * window.innerWidth);
  const Y = Math.round(Math.random() * window.innerHeight);
  //console.log(animationDuration);
  setProperty(animationDuration, X, Y);
}
loopStar();
function loopStar() {
  var id = setInterval(loop, 70);

  function loop() {
    changeAnimationTime();
  }
}
//!STAR ANIMATION STUFF ENDS

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
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

  var id = setInterval(frameR, 80);

  function frameR() {
    elem.style.top += 40 + "px";
    MainElems.style.top += 50 + "%";
    MainDesc.style.top += 40 + "%";
  }
}
//TODO add animations/loading screens
function redirectVids() {
  //RedirectAnimate();
  document.body.innerHTML = "";
  //document.body.style.background = "#000000";
  var btn = document.createElement("div");
  btn.id = "Loading";
  btn.innerHTML = "Loading";

  window.location.replace("https://kevinwh0.github.io/NewTestKWweb/Social.html");

  document.body.appendChild(btn);

  //Transition
  //sleep(1000);
}
function redirectProjects() {
  document.body.innerHTML = "";
  //document.body.style.background = "#000000";
  var btn = document.createElement("div");
  btn.id = "Loading";
  btn.innerHTML = "Loading";
  window.location.replace("https://kevinwh0.github.io/NewTestKWweb/Projects.html");
  document.body.appendChild(btn);
}
