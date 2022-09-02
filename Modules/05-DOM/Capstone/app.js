// // Select the header element
const selectHeader = document.querySelector("header")                
var prevScrollpos = window.pageYOffset;


// // // Event listener: Mouse move                
// // // When user hovers around the top area, show the header                
window.addEventListener("mousemove", showHeader)

function showHeader() {
  if (event.clientY <= 100) {
    selectHeader.style.top = "0";
  } else {
    selectHeader.style.top = "-150px";
  }
}
                
// // // Event listener: Scroll                
// // // When user scroll after a certain height, hide the header, else show the header
window.addEventListener("scroll", hideHeader)

function hideHeader() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    selectHeader.style.top = "0";
  } else {
    selectHeader.style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}



