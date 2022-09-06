document.addEventListener("DOMContentLoaded", () => {
  const mainSwiper = new Swiper(".interface__slider", {
    effect: "cards",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var slidelength = document.querySelectorAll(".swiper-slide").length;
  var custSpan = document.querySelectorAll(".cust-sp");
  var sliderWidth = document.querySelector(".interface__slider").clientWidth;
  var custSpanWidth = sliderWidth / slidelength - 12;
  var cusBullet = document.querySelectorAll(".swiper-pagination-bullet");

  cusBullet.forEach(function (item) {
    item.style.width = custSpanWidth + "px";
  });

  document.querySelector(".logo-link").addEventListener("click", function (e) {
    e.preventDefault();
    // console.log('click');

    mainSwiper.slideTo(0, 500, false);
  });

  document.querySelector(".tabs-link").addEventListener("click", function (e) {
    e.preventDefault();
    let mainCont = document.querySelector(".main-cont");

    mainCont.classList.remove("passive");

    mainCont.classList.add("passive");
    document.querySelector(".tab__sect").classList.add("active");
    document.querySelector(".tab-item").classList.add("active");
  });

  document.querySelector(".tgl-main").addEventListener("click", function (e) {
    e.preventDefault();
    let mainCont = document.querySelector(".main-cont");

    mainCont.classList.remove("passive");
    document.querySelector(".tab__sect").classList.remove("active");
    document.querySelector(".tab-item").classList.remove("active");
  });

  const tabsBtn = document.querySelectorAll(".tab-lnk");
  const tabsItems = document.querySelectorAll(".tab-item");

  tabsBtn.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentTab.classList.add("active");
    });
  });
});
