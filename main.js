var song= "";
var song_2= "";
var left_wrist_x = "";
var left_wrist_y = "";
var right_wrist_x = "";
var right_wrist_y = "";
var score_leftWrist = "";
var score_rightWrist = "";
var song_status = "";
function setup() {
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video,0,0,600,600);
    fill("red");
    song_status = song.isPlaying();
    if(score_leftWrist > 0.2 ){
        circle( left_wrist_x, left_wrist_y,20);
        song_2.stop();
     if(song_status == false){
song.play();
document.getElementById("song_name").innerHTML=" Playing SONG 1"
     }
    }
    if(score_rightWrist > 0.2 ){
        circle( right_wrist_x, right_wrist_y,20);
     
        if(song_status == false)
        {
            song.stop();
            song_2.play();
            document.getElementById("song_name").innerHTML=" Playing SONG 2"
        }
       
    }
    
}
function modelLoaded() {
console.log("modelll isss loadeddd!!!");
}
function gotPoses(results) {
    console.log("gottt thee pooooooosessss!!");
    if (results.length > 0){
        console.log(results);
       left_wrist_x = Math.round(results[0].pose.leftWrist.x);
       left_wrist_y = Math.round( results[0].pose.leftWrist.y);
       right_wrist_x =  Math.round(results[0].pose.rightWrist.x);
       right_wrist_y = Math.round( results[0].pose.rightWrist.y);
       console.log(left_wrist_x);
       console.log(left_wrist_y);
       console.log(right_wrist_x);
       console.log(right_wrist_y);
       score_leftWrist = results[0].pose.keypoints[9].score;
       console.log(score_leftWrist);
       score_rightWrist = results[0].pose.keypoints[10].score;
       console.log(score_rightWrist);
    }
}
function preload() {
    song = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");

}