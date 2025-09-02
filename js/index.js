const sections = document.querySelectorAll("section")
const progressBar = document.getElementById("myBar")

if (progressBar) {
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
}
// Gestione del cursore personalizzato
const cursor = document.getElementById("custom-cursor")

// Nascondi il cursore di default per tutto il documento
document.body.style.cursor = "none"

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`
  cursor.style.left = `${e.clientX}px`
})

/* // Elementi che attivano l'hover
const hoverElements = document.querySelectorAll(
  "button, a, .hover-target, ul, li, .dropdown, .dropdown *"
)

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover")
  })

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover")
  })
}) */

// Gestione speciale per il dropdown
// const dropdownButton = document.getElementById("dropdownNavbarLink");
// const dropdownMenu = document.getElementById("dropdownNavbar");

// if (dropdownButton && dropdownMenu) {
//   dropdownButton.addEventListener("mouseenter", () => {
//     cursor.classList.add("hover");
//   });

//   dropdownMenu.addEventListener("mouseenter", () => {
//     cursor.classList.add("hover");
//   });

//   dropdownMenu.addEventListener("mouseleave", () => {
//     cursor.classList.remove("hover");
//   });
// }

// var swiper = new Swiper(".centered-slide-carousel", {
//   centeredSlides: true,
//   paginationClickable: true,
//   loop: true,
//   spaceBetween: 30,
//   slideToClickedSlide: true,
//   pagination: {
//     el: ".centered-slide-carousel .swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     1920: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     1028: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     990: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//   },
// })
