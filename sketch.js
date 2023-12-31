
// Video
let video;
let classifier;

let label = 'waiting...';
let confidence = '';
// STEP 1: Load the model!
function preload(){
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fCoFY_Fi-/');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify!
function classifyVideo(){
  classifier.classify(video, gotResults)
}

function draw() {
  background(0);
  

  textSize(48);
  textAlign(CENTER, CENTER);
  fill(255);
  textFont('Rubik Doodle Shadow');
  text('                                                    '+label + '  ' + round(confidence*100)+'%', width/2, height/2);
  
    // Draw the video
  translate(windowWidth/2,100)
  scale(-1,1)
  image(video, 0, 0);
  

  // STEP 4: Draw the label
}


// STEP 3: Get the classification!
function gotResults(error, results){
  if(error){
    console.error(error);
    return
  }
  else{
    label = results[0].label;
    confidence =results[0].confidence;
  }
  classifyVideo();
}
