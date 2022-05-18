img = "";
status = "";

function preload() {
    img = loadImage("https://target.scene7.com/is/image/Target/GUEST_b2160829-b2f0-4d77-b8b1-58be5f378b15?wid=488&hei=488&fmt=pjpeg")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 640, 420)
}