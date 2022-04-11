const coach = Document.getelementById("coach");
coach.addEventListener("click", Coach);

function Coach() {
  const a = Math.random();
  if (a > 0.5) {
    alert("Coach ran away");
  } else if (a < 0.5) {
    alert("404 coach not found");
  }
}
