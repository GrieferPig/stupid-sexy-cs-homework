// sorry for cheating but LOOK AT THE TIME
// I want to reuse index.html's navbar and footer so the code is less redundant
// by splitting parts of the page into components
// like what you would normally do in Vue.js
// it's a convention for me
// this file serves as a switcher between these pages

// get page height according to pageName
// height is hardcoded because Chrome does not
// support cross origin access@local file
// thus I cannot get page height dynamically
// but it will no longer have this restriction after I deployed it into the cloud
// this is painful

// height info: document.body.scrollHeight
function getPageHeight(pgName) {
  switch (pgName) {
    case "mane":
      return 600;
    case "news":
      return 600;
    case "teacher":
      return 600;
    case "unit":
      return 600;
    default:
      return 0;
  }
}

console.log(window.location);

let kindle = document.getElementById("kindle");

let currentPage = "mane";

function sP(pgName) {
  kindle.src = `comp/${pgName}.html`;
  currentPage = pgName;
}

// resie iframe's height to its content size
// Thanks stackoverflow you saved my life (again)
function resize() {
  kindle.height = getPageHeight(currentPage) + 40; // margin come from nowhere: 32 + body margin: 8
}

window.addEventListener("resize", (event) => {
  resize();
});
