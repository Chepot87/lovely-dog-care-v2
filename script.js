document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     CLICK TRACKING (DEV MODE)
  ======================= */
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      console.log("CLICKED:", link.href);
    });
  });

  /* =======================
     SCROLL REVEAL (PREMIUM OBSERVER)
  ======================= */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      entry.target.classList.add("active");

      // optional: stop observing after reveal (more performance + “Apple feel”)
      observer.unobserve(entry.target);

    });

  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(el => observer.observe(el));

});