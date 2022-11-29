function postDim() {
  let message = {
    height: document.body.scrollHeight,
  };

  // window.top refers to parent window
  window.top.postMessage(message, "*");
}

window.addEventListener("load", postDim);

window.addEventListener("resize", postDim);
