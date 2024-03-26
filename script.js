let detailsBox = document.getElementById("details-box");

const audio = new Audio("This-Ain't-Texas.mp3");
const audioTX = new Audio("That's-Texas.mp3");

document.addEventListener("mouseover", function (e) {
  if (e.target.tagName.toLowerCase() === "path") {
    let content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "1";

    if (e.target.id === "TX") {
      if (!audioTX.isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        audioTX.play();
        audioTX.isPlaying = true;
        audio.isPlaying = false;
      }
    } else {
      if (!audio.isPlaying) {
        audioTX.pause();
        audioTX.currentTime = 0;
        audio.play();
        audio.isPlaying = true;
        audioTX.isPlaying = false;
      }
    }
  } else {
    detailsBox.style.opacity = "0";
  }
});

audio.isPlaying = false;
audioTX.isPlaying = false;

audio.onended = () => (audio.isPlaying = false);
audioTX.onended = () => (audioTX.isPlaying = false);

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

window.onload = function () {
  btn.click();
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
