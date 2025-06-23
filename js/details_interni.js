function openFullscreen(src) {
  const modal = document.getElementById("imageModal")
  const img = document.getElementById("modalImage")
  img.src = src
  modal.classList.remove("hidden")
}

function closeFullscreen() {
  const modal = document.getElementById("imageModal")
  modal.classList.add("hidden")
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    preventDefault();
    const allImages = document.querySelectorAll("img")

    let bestImage = null
    let maxVisibleArea = 0

    const viewportHeight = window.innerHeight
    const viewportTop = window.scrollY
    const viewportBottom = viewportTop + viewportHeight

    allImages.forEach((img) => {
      const rect = img.getBoundingClientRect()
      const top = rect.top
      const bottom = rect.bottom

      const visibleTop = Math.max(0, top)
      const visibleBottom = Math.min(window.innerHeight, bottom)
      const visibleHeight = visibleBottom - visibleTop

      const areaVisible = visibleHeight > 0 ? visibleHeight * rect.width : 0

      if (areaVisible > maxVisibleArea) {
        maxVisibleArea = areaVisible
        bestImage = img
      }
    })

    if (bestImage) {
      openFullscreen(bestImage.src)
    }
  }
})

if (event.code === "Escape") {
  const modal = document.getElementById("imageModal")
  if (!modal.classList.contains("hidden")) {
    closeFullscreen()
  }
}
