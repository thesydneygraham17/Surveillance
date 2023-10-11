let currentPage = 1,//controls the switch
  numberOfPages = 7,//pages in total, edit when adding more
  mouseIsClicked = false,
  buttonText = 'NEXT PAGE';//switching pages
let alphaValue = 0;//this is for the fade
let myImageArray = [];
let score = 0;
var bgImage;
var granny;


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
      fadeTextIntoView("\"She's been rather, ahem, 'difficult' to collect from.", width / 2, height / 2.4);
      fadeTextIntoView("You'll see what I mean soon.", width / 2, height / 2.2);
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
    case 8:
      AnimationPage();
      //rect(width/2,height/2,100,100);
      fill(255);
      stroke(255);
      text(score, 100, 100, 100, 100);
      break;
  }

  //customButton(width / 2, height * 0.8, 80, 40, 1);//this is the next button, idk how to get it to go away on pg 7

  mouseIsClicked = false;
}

function AnimationPage() {
  // push();
  // fill(255, 0, 0); 
  // rect(width / 2, height / 2, 300, 200); 
  // pop();//THIS IS THE ANIMATION BOX FOR SPRITE

  image(bgImage, width/2, height/2, 550, 550);

  // Draw myImageArray on top of the background
  image(granny, width/2, height/2, 150, 150);
  
  
  customButton(width * 0.2, height * 0.1, 80, 40, 8); // top left-maybe camera?
  customButton(width * 0.8, height * 0.1, 80, 40, 8); // top right-search bar
  customButton(width * 0.2, height * 0.9, 80, 40, 8); // bottom left-mic
  customButton(width * 0.8, height * 0.9, 80, 40, 8); // bottom right-access log
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
    // if (currentPage >= numberOfPages) {//uses next button to change pages
    //   currentPage = 1;
    // } else {
    //   currentPage++;
    //   alphaValue = 0; 
    // }
    if (nextPage == 8) { score++ }
    currentPage = nextPage;
    alphaValue = 0;
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
//remove the next button
//make it so that the animation of the grandma is moving around 
//make it so the buttons are clickable
//make it so stuff is 'typed in' the search bar
//make it so that there is a log on the bottom screen
//make it so that the text is clickable
//give end result based on score at the end
//text boxes
