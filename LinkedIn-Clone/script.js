const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
      ? '<i class="fa-solid fa-bars text-xl"></i>'
      : '<i class="fa-solid fa-xmark text-xl"></i>';
  });