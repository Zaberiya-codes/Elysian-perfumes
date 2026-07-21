/* ============ Data ============ */
const signature = [
  { name: "Éclat d'Or",   tag: "Eau de Parfum",    price: "€ 240", img: "assets/product-1.jpg", note: "Bergamot · Jasmine · Amber" },
  { name: "Nuit Ambrée",  tag: "Extrait de Parfum",price: "€ 320", img: "assets/product-2.jpg", note: "Oud · Saffron · Vanilla" },
  { name: "Rose Céleste", tag: "Eau de Parfum",    price: "€ 210", img: "assets/product-3.jpg", note: "Rose · Peony · Musk" },
  { name: "Onyx Noir",    tag: "Parfum",           price: "€ 285", img: "assets/product-4.jpg", note: "Leather · Tobacco · Cedar" },
];

const notes = [
  { name: "Floral",  desc: "Jasmine, rose, and tuberose in delicate composition.", img: "assets/note-floral.jpg" },
  { name: "Woody",   desc: "Sandalwood and cedar for grounded warmth.",             img: "assets/note-woody.jpg" },
  { name: "Citrus",  desc: "Bergamot and neroli — luminous first impressions.",      img: "assets/note-citrus.jpg" },
  { name: "Musk",    desc: "Sensual depth, softly enveloping the skin.",             img: "assets/note-musk.jpg" },
  { name: "Vanilla", desc: "Madagascan vanilla, creamy and lingering.",              img: "assets/note-vanilla.jpg" },
  { name: "Amber",   desc: "Resinous warmth with a golden, honeyed glow.",           img: "assets/note-amber.jpg" },
  { name: "Oud",     desc: "Smoky agarwood — precious, ancient, unforgettable.",     img: "assets/note-oud.jpg" },
];

const bestsellers = [
  { name: "Éclat d'Or",   img: "assets/product-1.jpg", price: "€ 240", badge: "Iconic" },
  { name: "Nuit Ambrée",  img: "assets/product-2.jpg", price: "€ 320", badge: "Cult" },
  { name: "Rose Céleste", img: "assets/product-3.jpg", price: "€ 210", badge: "New" },
];

const reviews = [
  { name: "Isabella R.", city: "Milan",    text: "A fragrance that feels like couture on skin — timeless and impossibly refined." },
  { name: "Amelia K.",   city: "London",   text: "Éclat d'Or is now the only perfume in my vanity. Everything else feels ordinary." },
  { name: "Sophie L.",   city: "New York", text: "The craftsmanship is evident from the first note to the dry down. Extraordinary." },
];

const gallery = ["assets/gallery-1.jpg","assets/gallery-2.jpg","assets/gallery-3.jpg","assets/gallery-4.jpg"];

/* ============ Render ============ */
const stars = () => "★★★★★";

document.getElementById("signature-grid").innerHTML = signature.map((p, i) => `
  <article class="prod-card reveal" style="transition-delay:${i*80}ms">
    <div class="prod-media">
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
      <button class="prod-discover">Discover</button>
    </div>
    <div class="prod-meta">
      <div>
        <p class="prod-tag">${p.tag}</p>
        <h3 class="prod-name">${p.name}</h3>
        <p class="prod-note">${p.note}</p>
      </div>
      <p class="prod-price">${p.price}</p>
    </div>
  </article>
`).join("");

document.getElementById("notes-grid").innerHTML = notes.map((n, i) => `
  <div class="note-card reveal" style="transition-delay:${i*70}ms">
    <div class="note-media"><img src="${n.img}" alt="${n.name}" loading="lazy" /></div>
    <div class="note-body">
      <h3>${n.name}</h3>
      <p>${n.desc}</p>
    </div>
  </div>
`).join("");

document.getElementById("best-grid").innerHTML = bestsellers.map((b, i) => `
  <article class="best-card reveal" style="transition-delay:${i*100}ms">
    <div class="best-media">
      <img src="${b.img}" alt="${b.name}" loading="lazy" />
      <span class="best-badge">${b.badge}</span>
    </div>
    <div class="best-foot">
      <div>
        <h3>${b.name}</h3>
        <div class="stars">${stars()}</div>
      </div>
      <p class="prod-price">${b.price}</p>
    </div>
  </article>
`).join("");

document.getElementById("reviews-grid").innerHTML = reviews.map((r, i) => `
  <figure class="review-card reveal" style="transition-delay:${i*100}ms">
    <div class="stars">${stars()}</div>
    <blockquote>“${r.text}”</blockquote>
    <figcaption class="review-foot">
      <span class="name">${r.name}</span><span class="city"> · ${r.city}</span>
    </figcaption>
  </figure>
`).join("");

document.getElementById("gallery-grid").innerHTML = gallery.map((src, i) => `
  <div class="gallery-item reveal" style="transition-delay:${i*80}ms">
    <img src="${src}" alt="Editorial ${i+1}" loading="lazy" />
  </div>
`).join("");

document.getElementById("yr").textContent = new Date().getFullYear();

/* ============ Scroll header ============ */
const header = document.getElementById("site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ============ Mobile menu ============ */
const menuBtn = document.getElementById("menuToggle");
menuBtn.addEventListener("click", () => header.classList.toggle("open"));
document.querySelectorAll(".mobile-menu a").forEach(a =>
  a.addEventListener("click", () => header.classList.remove("open"))
);

/* ============ Reveal on scroll ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in-view");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
