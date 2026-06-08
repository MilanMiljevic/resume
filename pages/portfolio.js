// ─── Portfolio — Brand splash → reveal gallery ───
(function () {
  var splash = document.getElementById("brandSplash");
  var content = document.getElementById("portfolioContent");
  if (!splash || !content) return;

  // Wait for the CSS animation to finish (5.5s) + tiny buffer, then fade both
  setTimeout(function () {
    splash.classList.add("hidden");
    content.classList.add("visible");
  }, 6000);
})();
