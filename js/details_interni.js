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
