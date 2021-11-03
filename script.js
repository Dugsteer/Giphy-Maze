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

function addDot(){
  dot.classList.toggle('dotter');
  isPlaying ? gaming.pause() : gaming.play();
}

gaming.onplaying = function() {
  isPlaying = true;
};
gaming.onpause = function() {
  isPlaying = false;
};

gaming.addEventListener('ended', function() {
  gaming.currentTime = 0;
  gaming.play();
}, false);

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

const image = document.getElementById("image");
const topText = document.getElementById("answer-text");
const questionText = document.getElementById("question-text");
const wronganswer = document.getElementById("wronganswer");
const good = document.getElementById("good");
const logOut = document.getElementById("logout");
const imgContainer = document.getElementById('img-container');
const after = document.getElementById('after');
const check = document.getElementById('check');
const remove = document.getElementById('remove');

// Counter for index of arrays
let place = 0;
let c;
let d;

// Arrays for top text and text on left and right

const problemSentences = [
  "Does every day Betsy have a bath?",
  false,
  "Tina visits her treehouse every Tuesday",
  true,
  "Ahmed does always Parkour on Saturday",
  false,
  "Daryl sometimes goes surfing",
  true,
  "Milly, Molly and Mark visit often their Grandparents",
  false,
  "Ben eats big burgers usually for breakfast",
  false,
  "Milo rarely gets up before 11.00am",
  true,
  "Luka twice a day eats ice cream",
  false,
  "Tommy rarely takes out his trash",
  true,
  "Archie often is angry",
  false,
  "Our teachers go often cycling",
  false,
  "Lily always listens to music in the evening",
  true
];

const correctedSentences = [
  "Does Betsy have a bath every day?",
  "Ahmed always does Parkour on Saturday",
  "Milly, Molly and Mark often visit their Grandparents",
  "Ben usually eats big burgers for breakfast",
  "Luka eats ice cream twice a day",
  "Archie is often angry",
  "Our teachers often go cycling"
];

// Remove the landing page and/or return user to the start
function restarter(){
  window.location.reload();
}

function begin() {
  place = -2;
  nextOne();
}

function showNextArrow(){
  logOut.style.visibility = "visible";
}

function showRightText(c){
  topText.innerText = correctedSentences.shift();
  console.log(topText.innerText);
  showNextArrow();
}

function showCorrect(){
  topText.innerText = "Correct";
  showNextArrow();
}

// Move on to the next 'slide'.
function nextOne() {
  place = place + 2;
  d = place;
  if (place > problemSentences.length - 2){
    questionText.innerHTML = "";
    good.style.display = "flex";
    wronganswer.style.display = "none";
    after.classList.remove('overlay');
    setTimeout(restarter, 3000);
} else {
  after.classList.remove('overlay');
  topText.style.visibility = "hidden";
  logOut.style.visibility = "hidden";
  questionText.innerText = problemSentences[place];
  image.src = `img/frequency-maze/slide${d/2}.jpeg`;
}
}

// Check to see if clicked is correct or not
function checkForWrong() { 
  topText.innerText = "";
    let c = problemSentences[place + 1];
    if (c === false){
      after.classList.add('overlay');
      topText.style.visibility = "visible";
     setTimeout(showRightText, 200);
     
    } else if (c === true) {
      wronganswer.style.display = "flex";
      setTimeout(restarter, 2000);
  }
}

function checkForRight() {
  topText.innerText = "";

    c = problemSentences[place + 1];
    if (c === true){
      after.classList.add('overlay');
      topText.style.visibility = "visible";
      setTimeout(showCorrect, 200);
    } else if (c === false) {
      wronganswer.style.display = "flex";
      setTimeout(restarter, 2000);
    }
  }

logOut.addEventListener("click", nextOne);
mainpic.addEventListener('click', addDot);
remove.addEventListener('click', checkForWrong);
check.addEventListener('click', checkForRight);


begin();
