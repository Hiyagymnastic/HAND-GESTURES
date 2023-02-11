prediction1 = "";
prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_farmat: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "image" src="' + data_uri + '">'
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GUu5rehGa/model.json', modelLoaded);
function modelLoaded() {
    console.log("Model is Loaded");
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is : " + prediction1;
    speak_data_2 = "And the second prediction is  : " + prediction2;
    utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function check() {
    pic = document.getElementById("image");
    classifier.classify(pic, gotResults);
}
function gotResults(e, r) {
    if (e) {
        console.error(e);
    }
    else {
        console.log(r);
        prediction1 = r[0].label;
        prediction2 = r[1].label;
        document.getElementById("result_gesture").innerHTML = prediction1;
        document.getElementById("result_gesture_2").innerHTML = prediction2;
        speak();
        if (prediction1 == "up arrow") {
            document.getElementById("update_gesture").innerHTML = "&#128070;";
        }
        else if (prediction1 == "down arrow") {
            document.getElementById("update_gesture").innerHTML = "&#128071;";
        } else if (prediction1 == "left side arrow") {
            document.getElementById("update_gesture").innerHTML = "&#128072;";
        } else if (prediction1 == "right side arrow ") {
            document.getElementById("update_gesture").innerHTML = "&#128073;";
        } else if (prediction1 == "victory") {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        } else if (prediction1 == "wow") {
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        } else if (prediction1 == "thumbs up ") {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if (prediction2 == "up arrow") {
            document.getElementById("update_gesture_2").innerHTML = "&#128070;";
        }
        else if (prediction2 == "down arrow") {
            document.getElementById("update_gesture_2").innerHTML = "&#128071;";
        } else if (prediction2 == "left side arrow") {
            document.getElementById("update_gesture_2").innerHTML = "&#128072;";
        } else if (prediction2 == "right side arrow ") {
            document.getElementById("update_gesture_2").innerHTML = "&#128073;";
        } else if (prediction2 == "victory") {
            document.getElementById("update_gesture_2").innerHTML = "&#9996;";
        } else if (prediction2 == "wow") {
            document.getElementById("update_gesture_2").innerHTML = "&#128076;";
        } else if (prediction2 == "thumbs up ") {
            document.getElementById("update_gesture_2").innerHTML = "&#128077;";
        }
    }
}