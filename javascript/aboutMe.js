const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showLeft");
    } else {
      entry.target.classList.remove("showLeft");
    }
  });
});

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showRight");
    } else {
      entry.target.classList.remove("showRight");
    }
  });
});

const hiddentElementsLeft = document.querySelectorAll(".hiddenLeft");
hiddentElementsLeft.forEach((el) => observerLeft.observe(el));

const hiddentElementsRight = document.querySelectorAll(".hiddenRight");
hiddentElementsRight.forEach((el) => observerRight.observe(el));
