const sections = document.querySelectorAll("section")
const progressBar = document.getElementById("myBar")

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target)
        const progress = (index / sections.length) * 130
        progressBar.style.width = progress + "%"
      }
    })
  },
  {
    threshold: 0.5, // 50% della sezione deve essere visibile per triggerare
  }
)

sections.forEach((section) => observer.observe(section))

// Gestione del cursore personalizzato
const cursor = document.getElementById("custom-cursor")

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`
  cursor.style.left = `${e.clientX}px`
})

// Aggiungi un effetto hover per gli elementi specificati
const hoverElements = document.querySelectorAll("button, a, .hover-target")

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)"
    cursor.style.backgroundColor = "#facc15"
    cursor.style.border = "1px solid #f59e0b"
  })
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
    cursor.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
    cursor.style.border = "2px solid #facc15"
  })
})

var swiper = new Swiper(".centered-slide-carousel", {
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    990: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
})
