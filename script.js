const progressEl = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentIndex = 1;

// Event listener
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

function goNext() {
  if (currentIndex === circles.length) return;
  else {
    currentIndex++;
    update();
  }
}

function goPrev() {
  if (currentIndex === 1) return;
  else {
    currentIndex--;
    update();
  }
}

//! update progress
function update() {
  circles.forEach((circle, index) => {
    if (index < currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // ! get all active circles
  const activeCircles = document.querySelectorAll(".circle.active");
  console.log(activeCircles);
  const activeWidth =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
  // ! updating the width of progress bar
  progressEl.style.width = activeWidth;

  if (currentIndex === circles.length) {
    nextBtn.disabled = true;
  } else if (currentIndex === 1) {
    prevBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
