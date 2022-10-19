//buttons
$(".button")
  .mousedown(function () {
    $(this).attr("src", $(this).data("click"));
  })
  .mouseout(function () {
    $(this).attr("src", $(this).data("src"));
  })
  .mouseup(function () {
    $(this).attr("src", $(this).data("src"));
  });

//functions to pop out pages
function aboutpage() {
  var x = document.getElementById("abm_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function projectpage() {
  var x = document.getElementById("project_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function torn() {
  var x = document.getElementById("constanttorn_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function NTK() {
  var x = document.getElementById("NTK_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function IWTBE() {
  var x = document.getElementById("IWTBE_page");
  var y = document.getElementById("IWTBEvideo");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "block";
  }
}

function Starsnot() {
  var x = document.getElementById("Starsnot_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function FarPlains() {
  var x = document.getElementById("FarPlains_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function HopeFear() {
  var x = document.getElementById("HopesFears_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function StayHere() {
  var x = document.getElementById("StayHere_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function ContactMe() {
  var x = document.getElementById("ContactMe_page");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//resizes back and buttons - currently not connected
function resize() {
  var x = document.getElementById("bg");
  if (x.style.width === "95%") {
    x.style.width = "100%";
  } else {
    x.style.width = "95%";
  }
  var b3 = document.getElementById("button3");
  var b1 = document.getElementById("button1");
  var b2 = document.getElementById("button2");
  var b4 = document.getElementById("button4");
  if (b3.style.width === "7%") {
    b3.style.width = "8%";
    b1.style.width = "12%";
    b2.style.width = "12%";
    b4.style.width = "13%";
    b3.style.top = "19vw";
    b2.style.top = "25vw";

    b2.style.left = "39vw";
    b3.style.left = "51vw";

    b4.style.top = "20vw";
    b4.style.left = "75vw";
  } else {
    b3.style.width = "7%";
    b1.style.width = "10%";
    b2.style.width = "10%";
    b4.style.width = "10%";

    b2.style.top = "24vw";
    b2.style.left = "37vw";

    b3.style.top = "18vw";
    b3.style.left = "49.89vw";

    b4.style.top = "19vw";
    b4.style.left = "71vw";
  }
}

//functions to drag around
dragElement(document.getElementById("abm_page"));
dragElement(document.getElementById("project_page"));
dragElement(document.getElementById("constanttorn_page"));
dragElement(document.getElementById("NTK_page"));
dragElement(document.getElementById("IWTBE_page"));
dragElement(document.getElementById("Starsnot_page"));
dragElement(document.getElementById("FarPlains_page"));
dragElement(document.getElementById("HopesFears_page"));
dragElement(document.getElementById("StayHere_page"));
dragElement(document.getElementById("ContactMe_page"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + ".popup")) {
    document.getElementById(elmnt.id + ".popup").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

$(".me1")
  .mousedown(function () {
    $(this).attr("src", $(this).data("click"));
  })
  .mouseout(function () {
    $(this).attr("src", $(this).data("src"));
  })
  .mouseup(function () {
    $(this).attr("src", $(this).data("src"));
  });

$(".me2")
  .mousedown(function () {
    $(this).attr("src", $(this).data("click"));
  })
  .mouseout(function () {
    $(this).attr("src", $(this).data("src"));
  })
  .mouseup(function () {
    $(this).attr("src", $(this).data("src"));
  });

// Makes windows got to front

$(".popup").click(function () {
  $(this).css("z-index", 20);
  //reset other sibling div's z-index to default value (i.e. 1)
  $(this).siblings(".popup").css("z-index", 19);
});

// hides window when pressing little me

$(document).ready(function () {
  $(".me1").on("mousedown", function () {
    $(".AboutMeWindow ").toggle();
  });
});
$(document).ready(function () {
  $(".me1").on("mouseup", function () {
    $(".AboutMeWindow").toggle();
  });
});
$(document).ready(function () {
  $(".me1").on("mousedown", function () {
    $(".AboutMeButton").toggle();
  });
});
$(document).ready(function () {
  $(".me1").on("mouseup", function () {
    $(".AboutMeButton").toggle();
  });
});
$(document).ready(function () {
  $(".me1").on("mousedown", function () {
    $(".AboutMeText").toggle();
  });
});
$(document).ready(function () {
  $(".me1").on("mouseup", function () {
    $(".AboutMeText").toggle();
  });
});

function sendEmail() {
  window.location = "mailto:hello@changopongo.com";
}

// hides window when pressing little me

$(document).ready(function () {
  $(".me2").on("mousedown", function () {
    $(".ContactMeWindow ").toggle();
  });
});
$(document).ready(function () {
  $(".me2").on("mouseup", function () {
    $(".ContactMeWindow").toggle();
  });
});
$(document).ready(function () {
  $(".me2").on("mousedown", function () {
    $(".ContactButton").toggle();
  });
});
$(document).ready(function () {
  $(".me2").on("mouseup", function () {
    $(".ContactMeButton").toggle();
  });
});
$(document).ready(function () {
  $(".me2").on("mousedown", function () {
    $(".ContactMeText").toggle();
  });
});
$(document).ready(function () {
  $(".me2").on("mouseup", function () {
    $(".ContactMeText").toggle();
  });
});
$(document).ready(function () {
  $(".me2").on("mouseup", function () {
    $(".ContactButton").toggle();
  });
});

//cant be dragged out
$("#bg").attr("draggable", false);
document.getElementById("bg").setAttribute("draggable", false);
$(".button").attr("draggable", false);
document.getElementById(".button").setAttribute("draggable", false);

$("#cloud").attr("draggable", false);
document.getElementById(".#cloud").setAttribute("draggable", false);
$("#cloud2").attr("draggable", false);
document.getElementById(".#cloud2").setAttribute("draggable", false);






function mContactMe() {
  var x = document.getElementById("ContactMe_mpage");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



function mAboutMe() {
  var x = document.getElementById("abm_mpage");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

