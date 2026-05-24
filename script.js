const target = document.getElementById('target');
const particleLayer = document.getElementById('particleLayer');

function createParticle() {
  const particle = document.createElement('span');
  particle.className = 'particle';

  const size = 8 + Math.random() * 12;
  const startX = 50 + (Math.random() - 0.5) * 22;
  const startY = 50 + (Math.random() - 0.5) * 22;
  const endX = (Math.random() - 0.5) * 180;
  const endY = (Math.random() - 0.5) * 180;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${startX}%`;
  particle.style.top = `${startY}%`;
  particle.style.setProperty('--vx', `${endX}px`);
  particle.style.setProperty('--vy', `${endY}px`);
  particle.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;
  particle.style.background = `radial-gradient(circle, rgba(255,255,255,1), rgba(${Math.random() > 0.5 ? '253,224,71' : '255,95,210'}, 0.8) 55%, transparent 100%)`;

  particleLayer.appendChild(particle);

  setTimeout(() => particle.remove(), 1800);
}

function createRing() {
  const ring = document.createElement('span');
  ring.className = 'ring';
  target.appendChild(ring);
  setTimeout(() => ring.remove(), 800);
}

function burstEffect() {
  target.classList.remove('active');
  void target.offsetWidth;
  target.classList.add('active');
  createRing();

  for (let i = 0; i < 28; i++) {
    createParticle();
  }
}

function autoSpark() {
  for (let i = 0; i < 4; i++) {
    createParticle();
  }
}

function randomizeGlow() {
  const colors = ['#ff5fd2', '#7c3aed', '#38bdf8', '#fde047', '#34d399'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  target.style.textShadow = `0 0 18px ${color}, 0 0 42px rgba(124, 58, 237, 0.8), 0 0 58px rgba(56, 189, 248, 0.55)`;
}

target.addEventListener('click', () => {
  burstEffect();
  randomizeGlow();
});

window.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    burstEffect();
    randomizeGlow();
  }
});

setInterval(autoSpark, 900);
setInterval(randomizeGlow, 1800);

burstEffect();
randomizeGlow();
