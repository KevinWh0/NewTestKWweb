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
  window.location.replace("/Home.html");

  document.body.appendChild(btn);

  //Transition
  //sleep(1000);
}
function redirectProjects() {
  window.location.replace("/Projects.html");
}

removeLoading();
function removeLoading() {
  var id = setInterval(frameR, 10);
  var el = document.getElementById("Loading");
  var body = document.getElementById("Body");

  var scrollDown = 50;
  var Opacity = 1;
  var Bsize = 151;
  function frameR() {
    if (Bsize > 125) {
      Bsize -= 1;
      scrollDown++;
      Opacity -= 0.1;
    } else {
      el.remove();
      clearInterval(id);
      addVidsToFrame();
    }

    el.style.top = scrollDown + "%";
    el.style.opacity = Opacity;
    body.style.backgroundSize = Bsize + "%";
  }
  //el.remove();
}

function addVidToFrame(id, multiplyer) {
  var btn = document.createElement("iframe");
  btn.id = "Video";
  btn.src = "https://www.youtube.com/embed/" + id /*TODO ADD ID OF VID HERE*/;
  btn.width = 560 * multiplyer;
  btn.height = 315 * multiplyer; //TODO find out if it needs this to be a string and make it a easy change varible
  btn.frameBorder = "0";
  btn.allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  btn.allowFullscreen = true;

  document.body.appendChild(btn);
}

//<iframe width="560" height="315" src="https://www.youtube.com/embed/JLXGS9B_gzE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

function addVidsToFrame() {
  const URLIDS =
    "JLXGS9B_gzE t-5_oLK8364 2VvED3v9j44 7iNKpiwQy2A fG3LGCVgBQk YuJ1mngQdlQ gpjtwN6coH0 XJ7rC3AYM6c HZBBc9HHKwM X669vG2OppU KV0DtxqizVY nzTmqaYGdac GDi0I2kL1JU KoDNjZphqpw KmTEyAQ-1C0 _iDT4ecvgdc 6LGHegNNbEs TRxZ44P1Ga8 fc278N3W1O0 fJuJoU2H1Yg wQwIA9gmZjU ELLdC1HZv2M TN5_Hh-7SbI lkn-EcWVIUs sfOgkUWufRk keUQ3fHcW_4 607hEpdL47Q Hni1DKSbgYM yJqTz25dAXU ZNtO1i-mH0w Z8t9QnHrsXs OuiNtWRE6Ow JkyJMkoQHPY LI4DB1EBXSw Nit_8B5J7K0 R5kIdgoAPEg ORKt8U-HM2E tZetPIRoBC4 c_DdBVMCKDs arMQFmdzNOM o5yHy6pS4Hs We9zfqAOXSo gV_fTMsGA9E FeCsvl7hXik jECIpu_FmAM wpPeH2IXNMw 07o3tj3ddZI vMqst_qtZV4 AaqdvlMbk9A FwARanX3-m0 XAAitbFQ2Fk OP_01LPMuJU";

  var ids = URLIDS.split(" ");
  for (let index = 0; index < ids.length; index++) {
    addVidToFrame(ids[index], 0.5);
  }
}
