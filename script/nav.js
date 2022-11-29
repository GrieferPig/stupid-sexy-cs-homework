// sorry for cheating but LOOK AT THE TIME
// I want to reuse index.html's navbar and footer so the code is less redundant
// by splitting parts of the page into components
// like what you would normally do in Vue.js
// it's a convention for me
// this file serves as a switcher between these pages

let kindle = document.getElementById("kindle");

function sP(pgName) {
  kindle.src = `comp/${pgName}.html`;
  currentPage = pgName;
}

// resize iframe's height to its content size

window.addEventListener(
  "message",
  function (e) {
    // message that was passed from iframe page
    let message = e.data;

    kindle.style.height = message.height + 22 + "px";
  },
  false
);
