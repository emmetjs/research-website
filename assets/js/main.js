// ── GSAP ─────────────────────────────────────────────────

gsap.registerPlugin(ScrollTrigger);


// ── HERO ─────────────────────────────────────────────────

gsap.set(
  [
    ".home-eyebrow",
    ".hero-title",
    ".hero-desc",
    ".hero-actions",
    ".home-right",
  ],
  { y: 24 },
);

const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

tl.to(".home-eyebrow", {
  opacity: 1,
  y: 0,
  duration: 0.7,
}, 0.25)
  .to(".hero-title", {
    opacity: 1,
    y: 0,
    duration: 0.9,
  }, 0.4)
  .to(".hero-desc", {
    opacity: 1,
    y: 0,
    duration: 0.7,
  }, 0.65)
  .to(".hero-actions", {
    opacity: 1,
    y: 0,
    duration: 0.6,
  }, 0.8)
  .to(".home-right", {
    opacity: 1,
    y: 0,
    duration: 0.8,
  }, 0.55);


// ── WORK CARDS ───────────────────────────────────────────

gsap.utils.toArray(".work-card").forEach((el, i) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.55,
    ease: "power2.out",
    delay: i * 0.08,
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
    },
  });
});


// ── SECTIONS ─────────────────────────────────────────────

[".skills-two-col", ".about-body", ".contact-body"].forEach((sel) => {
  const el = document.querySelector(sel);

  if (!el) return;

  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.65,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 86%",
    },
  });
});


// ── ACTIVE NAVIGATION ────────────────────────────────────

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

sections.forEach((section) => {
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          link.style.color =
            link.getAttribute("href") === "#" + entry.target.id
              ? "var(--ink)"
              : "";
        });
      });
    },
    { threshold: 0.35 },
  ).observe(section);
});
