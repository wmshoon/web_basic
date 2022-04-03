const js = document.getElementById("JS");
const html = document.getElementById("htmml");
const ron = document.getElementById("ron");
const j = document.getElementById("J");

js.addEventListener("click", J);
html.addEventListener("click", K);
ron.addEventListener("click", ronny);
j.addEventListener("click", jj);

function K() {
  alert("응 아니야 돌아가 겁나 어려워 응 아니야");
}

function J() {
  const rr = Math.random();
  if (rr > 0.5) {
    alert("Coach ran away");
  } else if (rr < 0.5) {
    alert("404 coach not found");
  }
}
function ronny() {
  const rr = Math.random();
  if (rr > 0.5) {
    alert("i am ron");
  } else if (rr < 0.5) {
    alert("i am dumb");
  }
}
function jj() {
  const rr = Math.random();
  if (rr > 0.5) {
    alert("i am j");
  } else if (rr < 0.5) {
    alert("i am dumb");
  }
}
