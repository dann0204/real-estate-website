import { properties, articles } from "./data.js";
import "./styles.css";

const icon = (name, size = 18) => {
  const paths = {
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    bed: '<path d="M2 4v16M2 8h20v12M2 17h20M6 8v4h4a3 3 0 0 0-4-4Z"/>',
    bath: '<path d="M9 6 7.5 4.5a2.12 2.12 0 0 0-3 3L6 9m0 0h14v5a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V9Zm2 11-1 2m10-2 1 2"/>',
    area: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h6V3m6 18v-6h6"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};

const propertyCard = (property) => `
  <article class="property-card">
    <a class="property-image" href="#contact" aria-label="Enquire about ${property.title}">
      <img src="${property.image}" alt="${property.title}" loading="lazy" />
      <span class="status-pill">${property.status}</span>
      <span class="image-arrow">${icon("arrow", 17)}</span>
    </a>
    <div class="property-info">
      <div class="property-heading"><div><h3>${property.title}</h3><p>${property.location}</p></div><strong>${property.price}</strong></div>
      <div class="property-meta"><span>${icon("bed", 16)} ${property.beds} Beds</span><span>${icon("bath", 16)} ${property.baths} Baths</span><span>${icon("area", 16)} ${property.area}</span></div>
    </div>
  </article>`;

const articleCard = (article) => `
  <article class="journal-card">
    <a class="journal-image" href="#contact"><img src="${article.image}" alt="" loading="lazy" /></a>
    <div class="journal-meta"><span>${article.category}</span><span>${article.date}</span></div>
    <h3><a href="#contact">${article.title}</a></h3><p>${article.excerpt}</p>
  </article>`;

document.querySelector("#app").innerHTML = `
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Haven home"><span class="brand-mark">h.</span><span>haven<span class="brand-dot">.</span></span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon("menu", 22)}</button>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="#properties">Properties</a><a href="#about">Our story</a><a href="#services">Services</a><a href="#journal">Journal</a>
    </nav>
    <a class="header-cta" href="#contact">Let's talk <span>${icon("arrow", 15)}</span></a>
  </header>

  <main>
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow"><i></i> A more thoughtful way home</span>
        <h1>Find a place<br />to <em>belong.</em></h1>
        <p>Spaces with soul. Places with purpose. Discover a home that feels like it was always meant for you.</p>
        <div class="hero-actions"><a class="button button-dark" href="#properties">Explore properties ${icon("arrow", 16)}</a><a class="text-link" href="#about">Get to know us <span>↗</span></a></div>
        <div class="hero-note"><span class="note-line"></span><span>Curated homes across Bali<br /><small>Thoughtfully selected, personally experienced.</small></span></div>
      </div>
      <div class="hero-visual">
        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" alt="Warm modern home surrounded by greenery" />
        <div class="hero-image-caption"><span>01 / 04</span><span>Spaces that tell a story</span></div>
        <div class="floating-card"><span class="floating-icon">✳</span><div><strong>More than a property.</strong><small>A feeling you can call home.</small></div></div>
      </div>
      <div class="hero-index">01 <span></span> 04</div>
    </section>

    <section class="intro-strip" id="about">
      <p class="eyebrow">A different perspective</p>
      <p class="intro-statement">We believe finding a home should feel as good as <em>living in one.</em></p>
      <a class="round-link" href="#services" aria-label="Discover our approach">↘</a>
    </section>

    <section class="section properties-section" id="properties">
      <div class="section-top"><div><span class="eyebrow">The collection</span><h2>Spaces worth<br /><em>coming home to.</em></h2></div><p>Every home has a story. We find the ones worth telling — thoughtfully selected for the way you want to live.</p></div>
      <div class="filter-row"><div class="filter-tabs" role="group" aria-label="Filter properties"><button class="filter-button active" data-filter="All">All homes <span>06</span></button><button class="filter-button" data-filter="For sale">For sale</button><button class="filter-button" data-filter="For rent">For rent</button></div><a class="text-link" href="#contact">View all properties <span>↗</span></a></div>
      <div class="property-grid" id="property-grid">${properties.slice(0, 3).map(propertyCard).join("")}</div>
    </section>

    <section class="story-section" id="services">
      <div class="story-image"><img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85" alt="Quiet architectural detail in a contemporary home" loading="lazy" /><span class="vertical-note">GOOD SPACES. GOOD STORIES. GOOD PEOPLE.</span></div>
      <div class="story-copy"><span class="eyebrow">The Haven approach</span><h2>It starts with<br />understanding <em>you.</em></h2><p>Property is personal. That's why we take the time to understand what matters to you — your pace, your plans, and the little things that make a place feel right.</p>
        <div class="service-list"><div><span>01</span><div><strong>Buy with confidence</strong><small>Guidance from first viewing to final key.</small></div><span>↗</span></div><div><span>02</span><div><strong>Sell with intention</strong><small>Thoughtful positioning for the right people.</small></div><span>↗</span></div><div><span>03</span><div><strong>Rent with ease</strong><small>Find a space that fits your everyday.</small></div><span>↗</span></div></div>
        <a class="button button-outline" href="#contact">Discover our approach ${icon("arrow", 16)}</a>
      </div>
    </section>

    <section class="quote-section"><span class="quote-mark">“</span><blockquote>The right home doesn't just fit your life. It makes room for the life you're becoming.</blockquote><span class="quote-credit">THE HAVEN PHILOSOPHY</span></section>

    <section class="section journal-section" id="journal">
      <div class="section-top"><div><span class="eyebrow">Notes from Haven</span><h2>A little inspiration<br />for <em>living well.</em></h2></div><a class="text-link" href="#contact">Explore the journal <span>↗</span></a></div>
      <div class="journal-grid">${articles.map(articleCard).join("")}</div>
    </section>

    <section class="contact-section" id="contact"><div><span class="eyebrow">Your next chapter</span><h2>Let's find your<br /><em>somewhere.</em></h2><p>Tell us what home looks like to you. We'd love to help you find it.</p></div><a class="contact-link" href="mailto:hello@haven.example">Start a conversation <span>↗</span></a><span class="contact-watermark">h.</span></section>
  </main>

  <footer class="site-footer"><a class="brand footer-brand" href="#top"><span class="brand-mark">h.</span><span>haven<span class="brand-dot">.</span></span></a><p>Thoughtfully finding places to belong.</p><div class="footer-bottom"><span>© 2025 Haven Real Estate. All rights reserved.</span><div><a href="#top">Instagram ↗</a><a href="#top">Pinterest ↗</a><a href="#top">Back to top ↑</a></div></div></footer>
`;

const grid = document.querySelector("#property-grid");
document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.active")?.classList.remove("active");
    button.classList.add("active");
    const filter = button.dataset.filter;
    const visible = filter === "All" ? properties.slice(0, 3) : properties.filter((item) => item.status === filter);
    grid.innerHTML = visible.map(propertyCard).join("");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.innerHTML = icon(isOpen ? "close" : "menu", 22);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.innerHTML = icon("menu", 22);
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".section, .story-section, .intro-strip, .quote-section, .contact-section").forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
