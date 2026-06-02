/* Latium Capital — language toggle + mobile menu */
(function () {
  var KEY = "lc_lang";
  var html = document.documentElement;

  function setLang(lang) {
    if (lang !== "it" && lang !== "en") lang = "it";
    html.setAttribute("data-lang", lang);
    html.setAttribute("lang", lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-l") === lang);
    });
  }

  var saved = "it";
  try { saved = localStorage.getItem(KEY) || "it"; } catch (e) {}
  setLang(saved);

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang button");
    if (b) { setLang(b.getAttribute("data-l")); return; }
    if (e.target.closest(".burger")) {
      document.querySelector(".menu").classList.toggle("open");
    }
  });
})();
