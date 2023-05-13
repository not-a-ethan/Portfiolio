const projectsListItem = document.getElementById("projectsLink");
const projectListDropDown = document.getElementById("projectListDropDown");
const windowWidth = window.innerWidth;

if (windowWidth <= 600) {
  projectsListItem.addEventListener("click", onMobileClick);
  projectsListItem.innerHTML = '<p>PROJECTS &#9660</p>';
} else if (windowWidth >= 601) {
  projectsListItem.innerHTML = '<a href="https://not-a-ethan.github.io/projects">PROJECTS &#9660 and some other stuff</a>';
}

function onMobileClick() {
  const stylesOfTheElement = window.getComputedStyle(projectListDropDown)
  console.log("clicked on mobile")
  console.log(stylesOfTheElement.getPropertyValue("opacity"))
  if (stylesOfTheElement.getPropertyValue("opacity") == "0") {
    console.log("opacity was 0")
    projectListDropDown.style.opacity = "1";
    projectListDropDown.style.visibility = "visible";
    projectListDropDown.style.transition = "all 0.5s ease-in";
  } else {
    console.log("opacity was 1")
    projectListDropDown.style.opacity = "0";
    projectListDropDown.style.visibility = "hidden";
    projectListDropDown.style.transition = "all 0.5s ease-in-out";
  }
}