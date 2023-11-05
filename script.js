const button = document.querySelector("#button");
const text = document.querySelector("#text");
const audio = document.querySelector("#audio");

button.onclick = unwelcome;

function unwelcome() {
    text.innerText = "Now we are going to see what's there in this website";
    button.innerText = "Know more!";
    button.onclick = step2;
}

function step2() {
    text.innerText = "Now you are going to learn what will go above your head. Want to see how?";
    button.innerText = "Let's Go!";
    button.onclick = step3;
}

function step3() {
    text.innerText = "🤣";
    document.getElementById("button").style.display = "none";
    audio.volume = 1; // Setting volume to maximum (1)
    audio.play(); // Playing the audio
}
