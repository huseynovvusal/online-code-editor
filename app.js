const runButton = document.querySelector("button");
window.addEventListener("keyup", run);

function run() {
  let htmlCode = document.querySelector(".editor #html").value;
  let cssCode =
    "<style>" + document.querySelector(".editor #css").value + "</style>";
  let jsCode = document.querySelector(".editor #js").value;

  let output = document.querySelector(".code");

  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(jsCode);
}
