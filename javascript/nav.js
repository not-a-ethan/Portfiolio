const projectsListItem = document.getElementById("projectsLink");
const projectListDropDown = document.getElementById("projectListDropDown");
const windowWidth = window.innerWidth;

if (windowWidth <= 600) {
  projectsListItem.addEventListener("click", onMobileClick);
  projectsListItem.innerHTML = '<p>PROJECTS &#9660</p>';
} else if (windowWidth >= 601) {
  projectsListItem.innerHTML = '<p><a href="https://not-a-ethan.github.io/projects">PROJECTS &#9660 and some other stuff</a></p>';
}
projectsListItem.querySelector("p").style.fontSize = "2.5vw"

function onMobileClick() {
  const stylesOfTheElement = window.getComputedStyle(projectListDropDown)
  if (stylesOfTheElement.getPropertyValue("opacity") == "0") {
    projectListDropDown.style.opacity = "1";
    projectListDropDown.style.visibility = "visible";
    projectListDropDown.style.transition = "all 0.5s ease-in";
  } else {
    projectListDropDown.style.opacity = "0";
    projectListDropDown.style.visibility = "hidden";
    projectListDropDown.style.transition = "all 0.5s ease-in-out";
  }
}