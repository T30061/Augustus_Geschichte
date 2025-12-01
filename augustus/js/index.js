// Zitat ein-/ausblenden
const showQuoteBtn = document.getElementById('show-quote');
const quoteBox = document.getElementById('quote-box');

if (showQuoteBtn && quoteBox) {
  showQuoteBtn.addEventListener('click', () => {
    const hidden = quoteBox.hasAttribute('hidden');
    if (hidden) {
      quoteBox.removeAttribute('hidden');
      showQuoteBtn.textContent = 'Zitat ausblenden';
    } else {
      quoteBox.setAttribute('hidden', '');
      showQuoteBtn.textContent = 'Zitat anzeigen';
    }
  });
}

// Zeitleiste ein-/ausblenden
const toggleTimelineBtn = document.getElementById('toggle-timeline');
const timeline = document.getElementById('timeline');

if (toggleTimelineBtn && timeline) {
  toggleTimelineBtn.addEventListener('click', () => {
    const hidden = timeline.style.display === 'none';
    timeline.style.display = hidden ? 'block' : 'none';
    toggleTimelineBtn.textContent = hidden ? 'Zeitleiste ausblenden' : 'Zeitleiste ein/aus';
  });
}

// Kleines Detail-Feature: Tooltip für Fachbegriffe
document.querySelectorAll('.facts li').forEach(li => {
  const text = li.textContent.toLowerCase();
  if (text.includes('princeps') || text.includes('prinzipat')) {
    li.title = 'Prinzipat: Monarchische Herrschaftsform mit republikanischen Fassaden; Princeps = „Erster Bürger“.';
  }
});

// Optional: Bilder dynamisch laden (falls ihr lokale Assets habt)
const heroImg = document.querySelector('.hero-image img');
const galleryImgs = document.querySelectorAll('.gallery-item img');

// Beispiel: Setzt Platzhalter, wenn kein Pfad hinterlegt ist
if (heroImg && !heroImg.src) {
  heroImg.src = 'assets/images/augustus-portrait.jpg'; // Lokaler Platzhalter
}
const galleryPlaceholders = [
  'assets/images/augustus-bust.jpg',
  'assets/images/augustus-statue.jpg',
  'assets/images/augustus-coin.jpg'
];
galleryImgs.forEach((img, i) => {
  if (!img.src) img.src = galleryPlaceholders[i] || galleryPlaceholders[0];
});
