const years = Array.from({ length: 2026 - 1978 + 1 }, (_, i) => 1978 + i);

const yearImages = {
  1978: "Keila/mum (50).jpg",
  1980: "Keila/mum (57).jpg",
  1985: "Keila/mum (34).jpg",
  1990: "Keila/mum (5).jpg",
  1995: "Keila/mum (17).jpg",
  2000: "Keila/mum (45).jpg",
  2005: "Keila/mum (41).jpg",
  2010: "Keila/mum (39).jpg",
  2015: "Keila/mum (14).jpg",
  2020: "Keila/mum (9).jpg",
  2025: "Keila/mum (7).jpg",
  2026: "Keila/MUMUM.png"
};

const sections = [
  {
    title: "A Heart Full of Love",
    description: "From the moment you held us in your arms, you showed us what unconditional love truly means. Your warmth has been our constant comfort, your smile our greatest joy.",
    imageSrc: "Keila/mum (33).jpg",
    imageAlt: "Beautiful memory with Mum"
  },
  {
    title: "Strength Beyond Measure",
    description: "You taught us that strength isn't about never falling  it's about rising every single time. Through challenges and triumphs, you showed us resilience and grace.",
    imageSrc: "Keila/mum (38).jpg",
    imageAlt: "Special family memory"
  },
  {
    title: "Endless Sacrifices",
    description: "The countless meals prepared with love, the sleepless nights, the dreams you put aside for ours  we see them all. Every sacrifice planted seeds of gratitude in our hearts.",
    imageSrc: "Keila/mum (15).jpg",
    imageAlt: "Cherished moment"
  }
];

const thankYouCards = [
  { title: "Thank You For Your Love", description: "Thank you for loving us with your whole heart and making every moment feel warm and safe.", imageSrc: "Keila/mum (23).jpg", imageAlt: "Thank You For Your Love" },
  { title: "Thank You For Your Strength", description: "Thank you for being strong for us, even on the days when it was not easy.", imageSrc: "Keila/mum (38).jpg", imageAlt: "Thank You For Your Strength" },
  { title: "Thank You For Your Sacrifices", description: "Thank you for every sacrifice, every late night, every meal, every prayer, and every bit of care.", imageSrc: "Keila/mum (15).jpg", imageAlt: "Thank You For Your Sacrifices" },
  { title: "Thank You For Your Guidance", description: "Thank you for teaching us right from wrong and guiding us with patience, wisdom, and love.", imageSrc: "Keila/mum (22).jpg", imageAlt: "Thank You For Your Guidance" },
  { title: "Thank You For Being You", description: "Thank you for being our mum, our comfort, our biggest blessing, and our forever home.", imageSrc: "Keila/mum (13).jpg", imageAlt: "Thank You For Being You" },
   { title: "Thank Your Presence", description: "Thank you for being present in our lives and for the joy you bring never letting us go through nothing alone .", imageSrc: "Keila/ma.png", imageAlt: "Thank You For Being You" }
];



const photos = [
  { src: "Keila/mum (1).jpg", tall: true },
  { src: "Keila/mum (2).jpg", tall: false },
  { src: "Keila/mum (3).jpg", tall: false },
  { src: "Keila/mum (4).jpg", tall: false },
  { src: "Keila/mum (5).jpg", tall: true },
  { src: "Keila/mum (6).jpg", tall: false },
  { src: "Keila/mum (7).jpg", tall: false },
  { src: "Keila/mum (8).jpg", tall: false },
  { src: "Keila/mum (9).jpg", tall: true },
  { src: "Keila/mum (10).jpg", tall: false },

  { src: "Keila/mum (11).jpg", tall: false },
  { src: "Keila/mum (12).jpg", tall: false },
  { src: "Keila/mum (13).jpg", tall: true },
  { src: "Keila/mum (14).jpg", tall: false },
  { src: "Keila/mum (15).jpg", tall: false },
  { src: "Keila/mum (16).jpg", tall: false },
  { src: "Keila/mum (17).jpg", tall: true },
  { src: "Keila/mum (18).jpg", tall: false },
  { src: "Keila/mum (19).jpg", tall: false },
  { src: "Keila/mum (20).jpg", tall: false },

  { src: "Keila/mum (21).jpg", tall: true },
  { src: "Keila/mum (22).jpg", tall: false },
  { src: "Keila/mum (23).jpg", tall: false },
  { src: "Keila/mum (24).jpg", tall: false },
  { src: "Keila/mum (25).jpg", tall: true },
  { src: "Keila/mum (26).jpg", tall: false },
  { src: "Keila/mum (27).jpg", tall: false },
  { src: "Keila/mum (28).jpg", tall: false },
  { src: "Keila/mum (29).jpg", tall: true },
  { src: "Keila/mum (30).jpg", tall: false },

  { src: "Keila/mum (31).jpg", tall: false },
  { src: "Keila/mum (32).jpg", tall: false },
  { src: "Keila/mum (33).jpg", tall: true },
  { src: "Keila/mum (34).jpg", tall: false },
  { src: "Keila/mum (35).jpg", tall: false },
  { src: "Keila/mum (36).jpg", tall: false },
  { src: "Keila/mum (37).jpg", tall: true },
  { src: "Keila/mum (38).jpg", tall: false },
  { src: "Keila/mum (39).jpg", tall: false },
  { src: "Keila/mum (40).jpg", tall: false },

  { src: "Keila/mum (41).jpg", tall: true },
  { src: "Keila/mum (42).jpg", tall: false },
  { src: "Keila/mum (43).jpg", tall: false },
  { src: "Keila/mum (44).jpg", tall: false },
  { src: "Keila/mum (45).jpg", tall: true },
  { src: "Keila/mum (46).jpg", tall: false },
  { src: "Keila/mum (47).jpg", tall: false },
  { src: "Keila/mum (48).jpg", tall: false },
  { src: "Keila/mum (49).jpg", tall: true },
  { src: "Keila/mum (50).jpg", tall: false },

  { src: "Keila/mum (51).jpg", tall: false },
  { src: "Keila/mum (52).jpg", tall: false },
  { src: "Keila/mum (53).jpg", tall: true },
  { src: "Keila/mum (54).jpg", tall: false },
  { src: "Keila/mum (55).jpg", tall: false },
  { src: "Keila/mum (56).jpg", tall: false },
  { src: "Keila/mum (57).jpg", tall: true },
  { src: "Keila/mum (58).jpg", tall: false },
  { src: "Keila/mum (59).jpg", tall: false },
  { src: "Keila/mum (60).jpg", tall: false },

  { src: "Keila/mum (61).jpg", tall: true },




];
let currentIndex = 0;
let autoPlayed = false;
let autoplayTimer = null;

const bigYear = document.getElementById("bigYear");
const yearImage = document.getElementById("yearImage");
const timeline = document.getElementById("timeline");
const markers = document.getElementById("timelineMarkers");

function closestImageYear(year) {
  const imageYears = Object.keys(yearImages).map(Number);
  return imageYears.reduce((best, item) => Math.abs(item - year) < Math.abs(best - year) ? item : best, imageYears[0]);
}

function buildMarkers() {
  years.filter((_, i) => i % 5 === 0).forEach(year => {
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.dataset.year = year;
    marker.innerHTML = `<span class="marker-dot"></span><span>${year}</span>`;
    markers.appendChild(marker);
  });
}

function updateTimeline() {
  const rect = timeline.getBoundingClientRect();
  const totalScrollable = timeline.offsetHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
  const year = years[Math.round(progress * (years.length - 1))];
  const imageYear = closestImageYear(year);

  bigYear.textContent = year;
  yearImage.src = yearImages[imageYear];
  yearImage.alt = `Memory from ${imageYear}`;

  document.querySelectorAll(".marker").forEach(marker => {
    const markerYear = Number(marker.dataset.year);
    marker.classList.toggle("active", Math.abs(markerYear - year) <= 2);
  });
}

function renderSpecial() {
  const item = sections[currentIndex];
  const specialCard = document.getElementById("specialCard");
  specialCard.innerHTML = `
    <div class="image-box"><img src="${item.imageSrc}" alt="${item.imageAlt}"></div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <div class="card-line"></div>
  `;
  specialCard.style.animation = "none";
  specialCard.offsetHeight;
  specialCard.style.animation = "fadeIn .35s ease both";

  document.querySelectorAll(".dot-btn").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
    dot.classList.toggle("done", index < currentIndex);
  });

  document.getElementById("prevBtn").disabled = currentIndex === 0;
  document.getElementById("nextBtn").disabled = currentIndex === sections.length - 1;
}

function buildSpecialDots() {
  const dots = document.getElementById("sectionDots");
  sections.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot-btn";
    dot.setAttribute("aria-label", `Go to section ${index + 1}`);
    dot.addEventListener("click", () => {
      currentIndex = index;
      renderSpecial();
    });
    dots.appendChild(dot);
  });
}

function startSpecialAutoplay() {
  if (autoPlayed) return;
  autoPlayed = true;
  autoplayTimer = setInterval(() => {
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      renderSpecial();
    } else {
      clearInterval(autoplayTimer);
    }
  }, 3500);
}

function buildGallery() {
  const grid = document.getElementById("photoGrid");
  photos.forEach((photo, index) => {
    const div = document.createElement("div");
    div.className = `photo ${photo.tall ? "tall" : ""}`;
    div.innerHTML = `<img src="${photo.src}" alt="Memory ${index + 1}">`;
    grid.appendChild(div);
  });
}

function buildThankYouCards() {
  const grid = document.getElementById("thankYouGrid");
  thankYouCards.forEach((card, index) => {
    const article = document.createElement("article");
    article.className = "thank-you-card reveal";
    article.innerHTML = `
      <div class="thank-image"><img src="${card.imageSrc}" alt="${card.imageAlt}"></div>
      <div class="thank-content">
        <span>Thank You ${index + 1}</span>
        <h3>${card.title}</h3>
        <p contenteditable="true" spellcheck="true">${card.description}</p>
      </div>
    `;
    grid.appendChild(article);
  });
}

function revealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal, .photo");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        if (entry.target.classList.contains("special")) startSpecialAutoplay();
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item, index) => {
    if (item.classList.contains("photo")) item.style.transitionDelay = `${index * 0.02}s`;
    observer.observe(item);
  });

  const specialObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) startSpecialAutoplay();
  }, { threshold: 0.35 });
  specialObserver.observe(document.querySelector(".special"));
}

function init() {
  buildMarkers();
  buildSpecialDots();
  buildGallery();
  buildThankYouCards();
  renderSpecial();
  revealOnScroll();
  updateTimeline();

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    renderSpecial();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = Math.min(sections.length - 1, currentIndex + 1);
    renderSpecial();
  });

  window.addEventListener("scroll", updateTimeline, { passive: true });
  window.addEventListener("resize", updateTimeline);
}

document.addEventListener("DOMContentLoaded", init);
