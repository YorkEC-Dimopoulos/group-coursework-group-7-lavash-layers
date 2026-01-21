(function () {
  const btn = document.getElementById("topBtn");
  if (!btn) return;

  const showAfter = 300;

  function toggleButton() {
    btn.style.display = window.scrollY > showAfter ? "block" : "none";
  }

  window.addEventListener("scroll", toggleButton);
  toggleButton();

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();