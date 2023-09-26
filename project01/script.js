let panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", function () {
    removeActive();
    panel.classList.add("active");
  })
);
function removeActive() {
  panels.forEach(function (pane) {
    pane.classList.remove("active");
  });
}
