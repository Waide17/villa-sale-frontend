const card = document.getElementById('card');
const SCALE_X = 4;
const SCALE_Y = 8;

let mouseX = 0;
let mouseY = 0;
let cardRect = null;
let animationFrame;

card.addEventListener('mouseenter', () => {
  cardRect = card.getBoundingClientRect();
  animate();
});

card.addEventListener('mousemove', (e) => {
  mouseX = e.clientX - cardRect.left;
  mouseY = e.clientY - cardRect.top;
});

card.addEventListener('mouseleave', () => {
  cancelAnimationFrame(animationFrame);
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
});

function animate() {
  const rotateX = ((mouseY / cardRect.height) * -(SCALE_Y * 2)) + SCALE_Y;
  const rotateY = ((mouseX / cardRect.width) * (SCALE_X * 2)) - SCALE_X;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;

  animationFrame = requestAnimationFrame(animate);
}
