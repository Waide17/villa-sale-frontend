const sections = document.querySelectorAll('section');
const progressBar = document.getElementById('myBar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = Array.from(sections).indexOf(entry.target);
      const progress = ((index) / sections.length) * 130;
      progressBar.style.width = progress + '%';
    }
  });
}, {
  threshold: 0.5  // 50% della sezione deve essere visibile per triggerare
});

sections.forEach(section => observer.observe(section));
