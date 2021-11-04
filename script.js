// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const mainpic = document.getElementById("mainpic");
const blue = window.matchMedia("(max-width: 800px)");

//switch introduction pic
const dot = document.getElementById("dot");
const gaming = new Audio("sounds/gaming.ogg");
var isPlaying = false;

function addDot() {
  dot.classList.toggle("dotter");
  isPlaying ? gaming.pause() : gaming.play();
}

gaming.onplaying = function () {
  isPlaying = true;
};
gaming.onpause = function () {
  isPlaying = false;
};

gaming.addEventListener(
  "ended",
  function () {
    gaming.currentTime = 0;
    gaming.play();
  },
  false
);

// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//Main Action

const myFrame = document.getElementById("myFrame");
const topText = document.getElementById("answer-text");
const questionText = document.getElementById("question-text");
const question2Text = document.getElementById("question2-text");
const question3Text = document.getElementById("question3-text");

const wronganswer = document.getElementById("wronganswer");
const good = document.getElementById("good");
const logOut = document.getElementById("logout");
const imgContainer = document.getElementById("img-container");
const after = document.getElementById("after");
const tick = document.getElementById("tick");
const cross = document.getElementById("cross");
const vidsy = document.getElementById("vidsy");

// Counter for index of arrays
let place = 0;
let c;
let d;

// Arrays for top text and text on left and right

{
  /* <iframe src="https://giphy.com/embed/lpOMzrjrSKYOA" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pulls-carry-yorkie-lpOMzrjrSKYOA">via GIPHY</a></p> */
}

const gifsets = [
  [
    "https://giphy.com/embed/lpOMzrjrSKYOA",
    "I am the most small dog at the airport",
    false,
    "I am the smallest dog at the airport",
    true,
    "I am the more small dog at the airport",
    false,
  ],
  [
    "https://giphy.com/embed/pVkmGyqYRt4qY",
    "This cat is the fattest cat",
    true,
    "This cat is the most fat cat",
    false,
    "This cat is the fatterest cat",
    false,
  ],

  [
    "https://giphy.com/embed/WLBw36RhSftTO",
    "This cat is taller than the woman",
    true,
    "The cat is more tall than the woman",
    false,
    "The cat is taller that the woman",
    false,
  ],
  [
    "https://giphy.com/embed/Bq5zu6O9zzCd7YIcU5",
    "This dog can to jump the more high",
    false,
    "This dog can jump the highest",
    true,
    "This dog can jump the most highest",
    false,
  ],
  [
    "https://giphy.com/embed/iMjbZeFfRtpDkF9oIY",
    "These people are not longer that the snake",
    false,
    "These people are not longer as the snake",
    false,
    "These people are not as long as the snake",
    true,
  ],
  [
    "https://giphy.com/embed/l1J9DLr6R3iLKGP28",
    "Was the saber-tooth the dangerousest cat?",
    false,
    "Was the saber-tooth the most dangerousest cat?",
    false,
    "Was the saber-tooth the most dangerous cat?",
    true,
  ],
  [
    "https://giphy.com/embed/iFgVSiwY3TQq0JGfMJ",
    "The blue whale is the biggest than animal",
    false,
    "The blue whale is the biggest animal",
    true,
    "The blue whale is the more bigger animal",
    false,
  ],
  [
    "https://giphy.com/embed/G0Eyqn8Gos2Wc",
    "Is the motorbike faster than the man?",
    true,
    "Is the motorbike the fastest as the man?",
    false,
    "Is the motorbike fastest as the man?",
    false,
  ],
  [
    "https://giphy.com/embed/zYCMFPiZEsWcM",
    "The tortoise is the oldest",
    true,
    "The dog isn't the older",
    false,
    "The plant isn't as oldest",
    false,
  ],
];

function next() {
  myFrame.src = `${gifsets[1][0]}`;
}

// Remove the landing page and/or return user to the start
function restarter() {
  window.location.reload();
}

function showNextArrow() {
  logOut.style.visibility = "visible";
}

function showRightText(c) {
  topText.innerText = `${gifsets[place][3]}`;
  console.log(topText.innerText);
  showNextArrow();
}

function showCorrect() {
  topText.innerText = "Correct!";
  showNextArrow();
}

// Move on to the next 'slide'.
function nextOne() {
  place = place + 1;
  d = place;
  questionText.style.fontWeight = "normal";
  question2Text.style.fontWeight = "normal";
  question3Text.style.fontWeight = "normal";
  questionText.style.visibility = "visible";
  question2Text.style.visibility = "visible";
  question3Text.style.visibility = "visible";
  if (place > gifsets.length - 1) {
    questionText.innerHTML = "";
    good.style.visibility = "visible";
    good.innerHTML = `<div style="width:100%"><div style="height:0;padding-bottom:75%;position:relative;width:100%"><iframe allowfullscreen="" frameBorder="0" height="100%" src="https://giphy.com/embed/YTbXXmG5SNfvn0K6s0/video" style="left:0;position:absolute;top:0" width="100%"></iframe></div></div>`;
    wronganswer.style.display = "none";
    after.classList.remove("overlay");

    setTimeout(restarter, 5000);
  } else {
    after.classList.remove("overlay");
    topText.style.visibility = "hidden";
    logOut.style.visibility = "hidden";
    questionText.innerText = `${gifsets[place][1]}`;
    question2Text.innerText = `${gifsets[place][3]}`;
    question3Text.innerText = `${gifsets[place][5]}`;
    // myFrame.src = `${gifsets[place][0]}`;
  }
}

function checkForRight1() {
  topText.innerText = "";

  let c = gifsets[place][2];
  if (c === true) {
    after.classList.add("overlay");
    topText.style.visibility = "visible";
    setTimeout(showCorrect, 50);
    myFrame.src = `${gifsets[place + 1][0]}`;
    question2Text.style.visibility = "hidden";
    question3Text.style.visibility = "hidden";
  } else if (c === false) {
    wronganswer.style.display = "flex";
    setTimeout(restarter, 2000);
  }
}
function checkForRight2() {
  topText.innerText = "";

  let c = gifsets[place][4];
  if (c === true) {
    after.classList.add("overlay");
    topText.style.visibility = "visible";
    setTimeout(showCorrect, 50);
    myFrame.src = `${gifsets[place + 1][0]}`;

    questionText.style.visibility = "hidden";
    question3Text.style.visibility = "hidden";
  } else if (c === false) {
    wronganswer.style.display = "flex";
    setTimeout(restarter, 2000);
  }
}
function checkForRight3() {
  topText.innerText = "";

  let c = gifsets[place][6];
  if (c === true) {
    after.classList.add("overlay");
    topText.style.visibility = "visible";
    setTimeout(showCorrect, 50);
    myFrame.src = `${gifsets[place + 1][0]}`;

    questionText.style.visibility = "hidden";
    question2Text.style.visibility = "hidden";
  } else if (c === false) {
    wronganswer.style.display = "flex";
    setTimeout(restarter, 2000);
  }
}

logOut.addEventListener("click", nextOne);
questionText.addEventListener("click", checkForRight1);
question2Text.addEventListener("click", checkForRight2);
question3Text.addEventListener("click", checkForRight3);

tick.addEventListener("click", checkForRight);
