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
  window.location.replace("/Home.html");

  document.body.appendChild(btn);

  //Transition
  //sleep(1000);
}
function redirectVids() {
  //RedirectAnimate();
  document.body.innerHTML = "";
  //document.body.style.background = "#000000";
  var btn = document.createElement("div");
  btn.id = "Loading";
  btn.innerHTML = "Loading";
  window.location.replace("/Social.html");

  document.body.appendChild(btn);

  //Transition
  //sleep(1000);
}
