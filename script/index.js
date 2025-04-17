//  Changes text content dynamically amd changes attributes

const heading = document.getElementById("heading");
heading.textContent = "Introduction to javascript";

//  Modifies CSS styles via JavaScript.

const services = document.getElementById("services");
services.style.color = "lime";
services.style.fontSize = "17px";

// Adds or removes an element when a button is clicked.
let button = document.getElementById("btn");
let mediaContainer = document.getElementById("mediaContainer");

function changeMe() {
    let currentMedia = mediaContainer.querySelector('img, video'); // get either an img or a video

    if (currentMedia.tagName.toLowerCase() === 'img') {
        // Replace image with video
        let video = document.createElement("video");
        video.src = "images/video.mp4";
        video.controls = true;

        mediaContainer.replaceChild(video, currentMedia);

    } else {
        // Replace video back with image
        let img = document.createElement("img");
        img.src = "images/imageone.jpg";
        img.alt = "Sample Image";
        mediaContainer.replaceChild(img, currentMedia);
    }
}

button.addEventListener('click', changeMe);



