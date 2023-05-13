const projectsListItem = document.getElementById("projectsLink");
const windowWidth = window.innerWidth;

if (windowWidth <= 600) {
  projectsListItem.innerHTML = '<p>PROJECTS &#9660</p>';
} else if (windowWidth >= 601) {
  projectsListItem.innerHTML = '<a href="https://not-a-ethan.github.io/projects">PROJECTS &#9660 and some other stuff</a>';
}