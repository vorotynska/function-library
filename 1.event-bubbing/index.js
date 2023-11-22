/*
  When the user clicks the "Display video" button, show the box containing the video, but don't start playing the video yet.
  When the user clicks on the video, start playing the video.
  When the user clicks anywhere in the box outside the video, hide the box.
*/

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", (event) => {
    event.stopPropagation();
    video.play();
});
box.addEventListener("click", () => box.classList.add("hidden"));

const output = document.querySelector('#output');

function handleClick(e) {
    output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`
}

const container = document.querySelector('#container');
const btn1 = document.querySelector('.btn1');

document.body.addEventListener("click", handleClick, {
    capture: true
});
container.addEventListener("click", handleClick, {
    capture: true
});
btn1.addEventListener("click", handleClick);