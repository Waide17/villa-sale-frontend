document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  if (!form) return

  form.addEventListener("submit", (e) => {
    let valid = true

    // Example fields: name, email, message
    const name = form.querySelector('[name="name"]')
    const last_name = form.querySelector('[name="last-name"]')
    const email = form.querySelector('[name="email"]')
    const phone = form.querySelector('[name="phone"]')
    const message = form.querySelector('[name="message"]')

    // Message validation
    if (!message.value.trim()) {
      valid = false
      document.getElementById("message").classList.add("error")
      message.focus()
    } else {
      message.classList.remove("error")
    }

    // Phone validation
    if (!phone.value.trim()) {
      valid = false
      document.getElementById("phone").classList.add("error")
      document.getElementById("phone").focus()
    } else if (!/^\+?[0-9\s]+$/.test(phone.value)) {
      valid = false
      document.getElementById("phone").classList.add("error")
      document.getElementById("phone").focus()
    } else {
      document.getElementById("phone").classList.remove("error")
    }

    // Email validation
    if (!email.value.trim()) {
      valid = false
      document.getElementById("email").classList.add("error")
      document.getElementById("email").focus()
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      valid = false
      document.getElementById("email").classList.add("error")
      document.getElementById("email").focus()
    } else {
      document.getElementById("email").classList.remove("error")
    }

    // Last name validation
    if (!last_name.value.trim()) {
      valid = false
      document.getElementById("last-name").classList.add("error")
      document.getElementById("last-name").focus()
    } else {
      document.getElementById("last-name").classList.remove("error")
    }

    // Name validation
    if (!name.value.trim()) {
      valid = false
      document.getElementById("name").classList.add("error")
      document.getElementById("name").focus()
    } else {
      document.getElementById("name").classList.remove("error")
    }

    if (!valid) {
      e.preventDefault()
    }
  })
})

function showFormSection(section) {
  const formTab = document.getElementById("form-tab")
  const mapTab = document.getElementById("map-tab")
  const formSection = document.getElementById("form-section")
  const mapSection = document.getElementById("map-section")
  if (section === "form") {
    formSection.classList.remove("hidden")
    mapSection.classList.add("hidden")
    formTab.classList.add("bg-yellow-500", "text-gray-900")
    formTab.classList.remove("bg-gray-700", "text-gray-200")
    mapTab.classList.remove("bg-yellow-500", "text-gray-900")
    mapTab.classList.add("bg-gray-700", "text-gray-200")
  } else {
    formSection.classList.add("hidden")
    mapSection.classList.remove("hidden")
    mapTab.classList.add("bg-yellow-500", "text-gray-900")
    mapTab.classList.remove("bg-gray-700", "text-gray-200")
    formTab.classList.remove("bg-yellow-500", "text-gray-900")
    formTab.classList.add("bg-gray-700", "text-gray-200")
  }
}
