const products = [
  { flavour: "KIWI", color: "#7ac142", circle: "#c8e69a", desc: "Pure taste. Better health.<br>Fresh start every morning." },
  { flavour: "STRAWBERRY", color: "#ff5a7a", circle: "#ffc2cf", desc: "Sweet & delicious.<br>Berry blast in every sip." },
  { flavour: "ORANGE", color: "#ff9f1a", circle: "#ffd89a", desc: "Full of Vitamin C.<br>Energy for the whole day." }
];
const dots = document.querySelectorAll(".dot");
const bottle = document.getElementById("bottle");
const circle = document.getElementById("circle");
const accent = document.getElementById("accent");
const flavourText = document.getElementById("flavourText");
const desc = document.getElementById("desc");
const leftBox = document.getElementById("leftBox");
let current = 0;

function changeJuice(index) {
  current = index; let p = products[index];
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
  bottle.style.background = p.color; circle.style.background = p.circle;
  accent.style.color = p.color; flavourText.textContent = p.flavour;
  flavourText.style.background = p.color; desc.innerHTML = p.desc;
  document.querySelector(".shop").style.background = p.color;
  document.querySelector(".logo span").style.color = p.color;
  document.querySelector(".login-btn").style.background = p.color;
  bottle.classList.remove("animate"); leftBox.classList.remove("animate");
  void bottle.offsetWidth; bottle.classList.add("animate"); leftBox.classList.add("animate");
}
dots.forEach(dot => { dot.addEventListener("click", () => { changeJuice(Number(dot.dataset.index)); }); });
setInterval(() => { let next = current + 1; if (next >= products.length) next = 0; changeJuice(next); }, 3000);

function showPage(pageId) {
  let currentPage = document.querySelector(".page.active-page");
  let nextPage = document.getElementById(pageId);
  if (currentPage === nextPage) { closeMenu(); return; }
  if (currentPage) currentPage.classList.add("fading-out");
  setTimeout(() => {
    document.querySelectorAll(".page").forEach(p => { p.classList.remove("active-page"); p.classList.remove("fading-out"); });
    nextPage.classList.add("active-page");
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    let link = document.querySelector(`[data-page="${pageId}"]`);
    if (link) link.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 600);
  closeMenu();
}
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => { e.preventDefault(); showPage(link.dataset.page); });
});
function goToJuice(index) { showPage("home"); changeJuice(index); }
function sendMessage(e) {
  e.preventDefault(); let name = document.getElementById("name").value;
  document.getElementById("successMsg").textContent = "Thank you " + name + "! Your message has been sent. ❤️";
  document.getElementById("name").value = ""; document.getElementById("email").value = ""; document.getElementById("msg").value = "";
}
function toggleMenu() { document.getElementById("navMenu").classList.toggle("show"); }
function closeMenu() { document.getElementById("navMenu").classList.remove("show"); }