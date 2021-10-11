var menuButton = document.querySelector(".header-burger");
menuButton.addEventListener('click', function () {
  console.log("клик по кнопке меню");
  document.querySelector(".header-menu").classList.toggle('header-menu--mobile');
});