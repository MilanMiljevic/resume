// ─── Skills — tap to reveal belt ───
(function () {
  const items = document.querySelectorAll(".skill-item");
  if (!items.length) return;

  // Initial dim state
  items.forEach((item) => item.classList.remove("active"));

  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      // If already active, deactivate it
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        return;
      }

      // Deactivate all others, activate this one
      items.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".skill-item")) {
      items.forEach((el) => el.classList.remove("active"));
    }
  });
})();
