const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeBtn.innerHTML = isLight ? "☀️" : "🌙";
});

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.innerHTML = "☀️";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

const projectSlider = document.querySelector(".project-slider");

document.querySelector(".next").addEventListener("click", () => {
  projectSlider.scrollBy({ left: 360, behavior: "smooth" });
});
document.querySelector(".prev").addEventListener("click", () => {
  projectSlider.scrollBy({ left: -360, behavior: "smooth" });
});

const gallerySlider = document.querySelector(".gallery-slider");

document.querySelector(".gallery-next").addEventListener("click", () => {
  gallerySlider.scrollBy({ left: 360, behavior: "smooth" });
});
document.querySelector(".gallery-prev").addEventListener("click", () => {
  gallerySlider.scrollBy({ left: -360, behavior: "smooth" });
});
