/*
 * SeattleDoge JavaScript 🐕
 * such interactive, much wow, very Gen-Z
 * Features: Page routing, easter eggs, animations, and Seattle vibes
 */

// ── State ──
let easterEggCount = 0;
let coffeeCount = 0;
const maxEasterEggs = 5;
const discovered = { console: false, title: false, coffee: false, konami: false, patience: false };

const surprises = [
  '🐶 wow, much click!',
  '🌧️ such Seattle rain, very mist!',
  '☕ many coffee, much espresso!',
  '🚀 to the moon, doge!',
  '🐾 woof woof, very surprise!',
];

// ── Page Routing ──
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo(0, 0);
  }
}

function setupNavigation() {
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => {
      showPage(btn.getAttribute('data-goto'));
    });
  });
}

// ── Easter Egg Counter ──
function updateCounter() {
  const el = document.getElementById('egg-count');
  if (el) el.textContent = easterEggCount + '/5';
}

function discoverEgg(key, message, pageTo) {
  if (discovered[key]) return;
  discovered[key] = true;
  easterEggCount++;
  updateCounter();
  console.log('%c' + message, 'color: #f5d547; font-size: 14px; font-weight: bold;');

  if (pageTo) {
    setTimeout(() => showPage(pageTo), 400);
  }

  if (easterEggCount >= maxEasterEggs) {
    setTimeout(() => {
      console.log('%c🏆 ACHIEVEMENT UNLOCKED: Doggo Hunter! 🏆', 'color: gold; font-size: 20px; font-weight: bold;');
      alert('🎉 Congrats! You found all easter eggs! You\'re officially a SeattleDoge doggo! 🐕');
    }, 800);
  }
}

// ── Console Easter Egg (#1) ──
console.log(`
%c
             ██▄▄▄▄▄▄▄▄▄   
            ▒▒▒▒▒▒▒▒▒▒▓██  
           ▀▀▒▒▒▀▀▒▒▒▓▓▓▓█ 
         ▄▄▄▒▒░    ░░▒▒▒▓█ 
         ▀▀▀▒▄▄▄   ░░▒▒▒▓█ 
           █▄░   ░░▒▒▒▒▓▓█ 
            ▀█▄▄▄▄▄▄▄▄▄▀▀  
        such art
        much console
        wow
`, 'color: #f47f78; font-family: monospace; font-size: 12px;');

console.log('%c🐕 SeattleDoge Console Easter Egg Unlocked! 🎉', 'color: #f5d547; font-size: 16px; font-weight: bold;');
console.log('%cYou found the first easter egg! Keep exploring...', 'color: #6b8cce; font-size: 12px;');

// ── Title Click Easter Egg (#2) → Doge Found page ──
function setupTitleInteraction() {
  const titles = document.querySelectorAll('.hero-title');
  titles.forEach(title => {
    title.addEventListener('click', () => {
      title.style.animation = 'shake 0.5s ease-in-out';
      setTimeout(() => { title.style.animation = ''; }, 500);

      discoverEgg('title', '🎯 Easter egg #2: Title clicked! Doge found!', 'doge');
    });
  });
}

// ── Coffee Counter Easter Egg (#3) → The City page ──
function setupCoffeeCounter() {
  const counter = document.getElementById('coffee-counter');
  if (!counter) return;

  counter.addEventListener('click', () => {
    coffeeCount++;
    counter.textContent = coffeeCount + ' cups';

    if (coffeeCount === 5) {
      discoverEgg('coffee', '☕ Easter egg #3: Coffee addiction unlocked! true Seattle vibes', 'city');
    }

    if (coffeeCount >= 10) {
      counter.textContent = 'too much caffeine 😵';
      setTimeout(() => { counter.textContent = coffeeCount + ' cups'; }, 2000);
    }
  });
}

// ── Konami Code Easter Egg (#4) → The Vibes page ──
function setupKonamiCode() {
  let konamiBuffer = [];
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

  document.addEventListener('keydown', (e) => {
    konamiBuffer.push(e.key);
    if (konamiBuffer.length > konami.length) konamiBuffer.shift();

    if (konamiBuffer.join(',') === konami.join(',')) {
      document.body.style.animation = 'spin 2s ease-in-out';
      setTimeout(() => { document.body.style.animation = ''; }, 2000);
      discoverEgg('konami', '🎮 Easter egg #4: Konami Code! Such nostalgia, much wow!', 'vibes');
    }
  });
}

// ── Time-Based Easter Egg (#5) → Roadmap page ──
function setupTimeBasedEgg() {
  setTimeout(() => {
    discoverEgg('patience', '⏰ Easter egg #5: Patience unlocked! You stayed for 30 seconds!', 'roadmap');
  }, 30000);
}

// ── Surprise Button ──
function setupSurpriseButton() {
  const btn = document.getElementById('surprise-btn');
  const label = document.getElementById('surprise-label');
  if (!btn || !label) return;

  btn.addEventListener('click', () => {
    const msg = surprises[Math.floor(Math.random() * surprises.length)];
    label.textContent = msg;
    setTimeout(() => { label.textContent = 'click me for surprises'; }, 2000);
  });
}

// ── Social Link Glow ──
function setupSocialGlow() {
  document.querySelectorAll('.social-icon').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.filter = 'drop-shadow(0 0 10px currentColor)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.filter = '';
    });
  });
}

// ── Scroll-Triggered Roadmap Animations ──
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.roadmap-item').forEach(item => observer.observe(item));
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupTitleInteraction();
  setupCoffeeCounter();
  setupKonamiCode();
  setupTimeBasedEgg();
  setupSurpriseButton();
  setupSocialGlow();
  setupScrollAnimations();

  // Mark console egg as found
  discovered.console = true;
  easterEggCount = 1;
  updateCounter();

  // Dev hints
  console.log('%c👋 Hello fellow developer! Welcome to SeattleDoge!', 'color: #f47f78; font-size: 14px;');
  console.log('%cThere are 5 easter eggs hidden on this page. Can you find them all?', 'color: #6b8cce;');
  console.log('%c1. ✅ Already found! (console doge)', 'color: #888;');
  console.log('%c2. Try clicking the big title...', 'color: #f5d547;');
  console.log('%c3. Need more coffee? ☕ (click it 5 times)', 'color: #f5d547;');
  console.log('%c4. Try the Konami code! ↑↑↓↓←→←→BA', 'color: #f5d547;');
  console.log('%c5. BONUS: Just wait around for a bit...', 'color: #f5d547;');
});
