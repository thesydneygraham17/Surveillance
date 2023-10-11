let currentPage = 1,//controls the switch
  numberOfPages = 7,//pages in total, edit when adding more
  mouseIsClicked = false,
  buttonText = 'NEXT PAGE';//switching pages
let alphaValue = 0;//this is for the fade
let myImageArray = [];
let score = 0;
var bgImage;
var granny;

let wordToClick = "score";
let timerInterval;
let timeLeft = 20; 


function preload() {
  {
    granny = loadImage('assets/granny.png');
    bgImage = loadImage('assets/living room.png');
  }
  console.log(myImageArray);
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  imageMode(CENTER);
  rectMode(CENTER);//makes it so its centered
  textAlign(CENTER);//makes it so its centered
  textSize(30);//for all text, this may change
  textLeading(40); //text spacing, do not touch cause you'll mess it up lol
  noStroke();//gets rid of outline
  fill(33);//fill of box
  startTimer();
}

function draw() {//these are all the pages that switch throughout
  background('black');//for main canvas, may change ngl
  

  switch (currentPage) {//page1
    case 1:
      drawPage(currentPage);
      buttonText = 'NEXT PAGE';
      textFont('Courier New');
      customButton(width / 2, height * 0.8, 80, 40, 2)
      break;

    case 2://page2
      drawPage(currentPage);
      buttonText = 'PLAY';
      textFont('Courier New');
      customButton(width / 2, height * 0.8, 80, 40, 3)
      break;

    case 3://page3
      fadeTextIntoView("\"Good morning. I see it's your first day here.", width / 2, height / 2);
      fadeTextIntoView("You look slightly confused, so let me explain what you'll be doing.\"", width / 2, height / 1.75);
      buttonText = 'NEXT PAGE';
      textFont('Courier New');
      customButton(width / 2, height * 0.8, 80, 40, 4)
      break;

    case 4://page4
      fadeTextIntoView("\"Today, you'll be collecting information for us.", width / 2, height / 2.4);
      fadeTextIntoView("Find all the data you can from the person we assign,", width / 2, height / 2.2);
      fadeTextIntoView(" so we can sell it to other companies.", width / 2, height / 2.0);
      fadeTextIntoView("We know your family is struggling, so if you do well,", width / 2, height / 1.8);
      fadeTextIntoView("we'll reward you highly.\"", width / 2, height / 1.65);
      buttonText = 'NEXT PAGE';
      textFont('Courier New');
      customButton(width / 2, height * 0.8, 80, 40, 5)
      break;

    case 5://page5
      fadeTextIntoView("\"Your first target is Martha Alden.\"", width / 2, height / 2.9);
      fadeTextIntoView("Stats:", width / 2, height / 2.6);
      fadeTextIntoView("Born- May 25, 1941", width / 2, height / 2.4);
      fadeTextIntoView("Age-82 years", width / 2, height / 2.2);
      fadeTextIntoView("Sex-Female", width / 2, height / 2.0);
      fadeTextIntoView("Height-5'4", width / 2, height / 1.8);
      fadeTextIntoView("Marital Status-Single", width / 2, height / 1.65);
      buttonText = 'NEXT PAGE';
      textFont('Courier New');
      customButton(width / 2, height * 0.8, 80, 40, 6)
      break;
    case 6://page6
      fadeTextIntoView("\"She will serve as part of our new ad revenue.", width / 2, height / 2.4);
      fadeTextIntoView("It doesn't matter who she is, just do it.", width / 2, height / 2.2);
      fadeTextIntoView("At any rate, be sure to submit your report before your shift ends.", width / 2, height / 2);
      fadeTextIntoView("Good luck.\"", width / 2, height / 1.8);
      fadeTextIntoView("-VigiLens Corp.", width / 2, height / 1.65);
      buttonText = 'NEXT PAGE';
      textFont('Courier New');
      customButton(width / 2, height * 0.8, 80, 40, 7)
      break;
    case 7: //page7, this is where all the animation takes place, reference function draw animation page
      AnimationPage();
      break;//this means that the cases are done, do not touch
  
  
      

     
      
  }

  //customButton(width / 2, height * 0.8, 80, 40, 1);//this is the next button, idk how to get it to go away on pg 7

  mouseIsClicked = false;
}

function AnimationPage() {
  // push();
  // fill(255, 0, 0); 
  // rect(width / 2, height / 2, 300, 200); 
  // pop();//THIS IS THE ANIMATION BOX FOR SPRITE
  background(0);
  image(bgImage, width/2, height/2, 550, 550);
  fill(255);
  text(`Score: ${score}`, 100, 40);
  text(`Time Left: ${timeLeft.toFixed(1)}s`, width - 150, 40);

  image(granny, width/2, height/2, 150, 150);

  if (timeLeft <= 0) {
    endGame();
  }
}
  
 
function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft -= .1;
  }, 100);
}
function endGame() {
  clearInterval(timerInterval);
  if (score >= 70) {
    fadeTextIntoView("\"You did your job a little too well. There was a ", width / 2, height / 2.4);
      fadeTextIntoView("security breach in the system, everyone's passwords", width / 2, height / 2.2);
      fadeTextIntoView("were stolen and Martha had her identity stolen, ", width / 2, height / 2.0);
      fadeTextIntoView("borderline ruining her life. We won't be giving you", width / 2, height / 1.8);
      fadeTextIntoView("the money, as we are being sued. Good day.", width / 2, height / 1.65);
  } else if (score >= 50) {
    fadeTextIntoView("\"You seem to have a knack for this.", width / 2, height / 2.4);
      fadeTextIntoView("She is an excellent source of money. However, she", width / 2, height / 2.2);
      fadeTextIntoView(" may be hacked in the near future, as a result of the security", width / 2, height / 2.0);
      fadeTextIntoView("breach. Here is your money.", width / 2, height / 1.8);
  } else if (score >= 20) {
    fadeTextIntoView("\"Good, we acquired a decent amount of data from her.", width / 2, height / 2.4);
      fadeTextIntoView("She will be spammed with ads on her favorite things.", width / 2, height / 2.2);
      fadeTextIntoView("A decent source of revenue, I suppose", width / 2, height / 2.0);
      fadeTextIntoView("Your money will be coming in two business days.", width / 2, height / 1.8);
  } else if (score >= 10) {
    fadeTextIntoView("\"I suppose it's fine.", width / 2, height / 2.4);
      fadeTextIntoView("She will be susceptible to more spam calls, but that's all.", width / 2, height / 2.2);
      fadeTextIntoView("Be very careful or you may be next.", width / 2, height / 2.0);
      fadeTextIntoView("Here's your money, and I expect you to do better next time.", width / 2, height / 1.8);
  } else {
    fadeTextIntoView("\"Did you even TRY?", width / 2, height / 2.4);
      fadeTextIntoView("As we speak, agents are taking your data in exchange", width / 2, height / 2.2);
      fadeTextIntoView("Needless to say, you won't be getting paid", width / 2, height / 2.0);
      fadeTextIntoView("Martha is unharmed, but you shall pay instead.", width / 2, height / 1.8);
  }
}
function displayText(message) {
  background(0);
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);
}


function micGame() {
  // push();
  // fill(255, 0, 0); 
  // rect(width / 2, height / 2, 300, 200); 
  // pop();//THIS IS THE ANIMATION BOX FOR SPRITE

  image(bgImage, width/2, height/2, 550, 550);

//yeah idk why it doesnt work without this
  image(granny, width/2, height/2, 150, 150);
  

}

function customButton(x, y, width, height, nextPage) {
  push();
  fill('black');
  strokeWeight(2);
  stroke('white');
  rect(x, y, width, height);
  noStroke();
  fill(50, 205, 50);
  textSize(14);
  textStyle(BOLD);
  text(buttonText, x, y);
  pop();

  if (//determines where button is clicked
    mouseX > x - width / 2 &&
    mouseX < x + width / 2 &&
    mouseY > y - height / 2 &&
    mouseY < y + height / 2 &&
    mouseIsClicked
  ) {
   
    
    if (nextPage == 8) { score++ }
    currentPage = nextPage;
    alphaValue = 0;
  }
}
function customButtonTwo(x, y, width, height, nextPage) {
  push();
  fill('blue');
  strokeWeight(2);
  stroke('white');
  rect(x, y, width, height);
  noStroke();
  fill(50, 205, 50);
  textSize(14);
  textStyle(BOLD);
  text(buttonText, x, y);
  pop();

  if (
    mouseX > x - width / 2 &&
    mouseX < x + width / 2 &&
    mouseY > y - height / 2 &&
    mouseY < y + height / 2 &&
    mouseIsClicked
  ) {
  
    isRectangleVisible = true;
    
    //literally do not need this but it breaks it so 
    nextPage = 9;
  }


  if (isRectangleVisible) {
    fill(255);
    rect(200, 200, 300, 200);

  
    currentPage = nextPage;
  }
}


    
  
function drawPage(page) {//first two pages that dont include the transparency thing
  switch (page) {
    case 1:
      push();
      fill('white');
      text("Surveillance", width / 2, height / 2);
      textFont('Courier New');
      pop();
      break;

    case 2:
      push();
      fill('white');
      text("by Sydney Graham", width / 2, height / 2);
      textFont('Courier New');
      pop();
      break;
    
    // text shown
    if (alphaValue < 255) {
      alphaValue += 5;
    }
  }
}

function mouseClicked() {//makes it so when you click everything activates
  mouseIsClicked = true;
    // check if in granny bounds
    if (
      mouseX > width / 2 - granny.width / 4 &&
      mouseX < width / 2 + granny.width / 4 &&
      mouseY > height / 2 - granny.height / 4 &&
      mouseY < height / 2 + granny.height / 4
    ) {
      // increase score
      score++;
    }
  }


function fadeTextIntoView(txt, x, y) {//fading text 
  push();
  fill(255, 255, 255, alphaValue);
  text(txt, x, y);
  pop();

  // more fade 
  if (alphaValue < 255) {
    alphaValue += 1;
  }
}

