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
        Body.style.backgroundSize = MainPos + 60 + "%";
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
        Body.style.backgroundSize = MainPos + 60 + "%";
      }
    }
  }
}
//TODO add animations/loading screens
function redirectVids() {
  window.location.replace("/Videos.html");
}
function redirectProjects() {
  window.location.replace("/Projects.html");
}
