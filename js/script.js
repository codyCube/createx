const swiperWrapper = document.querySelector(".header__swiper");
//videojs(querySelector(".video-js"))

new Swiper('.header__swiper', {
   slidesPerView: 1,
   direction: 'horizontal',
   spaceBetween: 0,
   loop: true,
   navigation: {
      nextEl: '.header__swiper-button-next',
      prevEl: '.header__swiper-button-prev',
   },
   pagination: {
      el: '.header__swiper-pagination',
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
      },
   },
});
//=================
const videoWrapper = document.querySelector('.video__video-wrapper');
const video = document.querySelector('.video__video');
const videoPlayBtn = document.querySelector(".video__video-play-btn")
video.addEventListener('click', () => {
   if (video.paused) {
      video.play();
      videoPlayBtn.classList.add("video__video-play-btn_hidden");
   }
   else {
      video.pause();
      videoPlayBtn.classList.remove("video__video-play-btn_hidden");
   }
});
videoPlayBtn.addEventListener('click', () => {
   if (video.paused) {
      video.play();
      videoPlayBtn.classList.add("video__video-play-btn_hidden");
   }
   else {
      video.pause();
      videoPlayBtn.classList.remove("video__video-play-btn_hidden");
   }
});


const videoVolumeBtn = document.querySelector('.video__video-volume-btn');
videoVolumeBtn.addEventListener('click', () => {
   if (video.muted) {
      video.muted = false;
      videoVolumeBtn.classList.add("video__video-volume-btn_hidden");
   }
   else {
      video.muted = true;
      videoVolumeBtn.classList.remove("video__video-volume-btn_hidden");
   }
});
//==========================
const media970px = window.matchMedia('(max-width: 970px)');
const media768px = window.matchMedia('(max-width: 768px)');
const media480px = window.matchMedia('(max-width: 480px)');
// const media320px = window.matchMedia('(max-width: 320px)');
const emailInput = document.querySelector(".footer__input");
function media() {
   if (media480px.matches) {
      emailInput.setAttribute("placeholder", "email");
      new Swiper('.browse-our__swiper', {
         slidesPerView: 1,
         direction: 'horizontal',
         spaceBetween: 10,
         loop: true,
         navigation: {
            nextEl: '.browse-our__swiper-button-next',
            prevEl: '.browse-our__swiper-button-prev',
         },
      });
      return
   }
   if (media768px.matches) {
      new Swiper('.browse-our__swiper', {
         slidesPerView: 2,
         direction: 'horizontal',
         spaceBetween: 10,
         loop: true,
         navigation: {
            nextEl: '.browse-our__swiper-button-next',
            prevEl: '.browse-our__swiper-button-prev',
         },
      });
      return
   }
   if (media970px.matches) {
      new Swiper('.browse-our__swiper', {
         slidesPerView: 2,
         direction: 'horizontal',
         spaceBetween: 30,
         loop: true,
         navigation: {
            nextEl: '.browse-our__swiper-button-next',
            prevEl: '.browse-our__swiper-button-prev',
         },
      });
      return
   }
   new Swiper('.browse-our__swiper', {
      slidesPerView: 3,
      direction: 'horizontal',
      spaceBetween: 30,
      loop: true,
      navigation: {
         nextEl: '.browse-our__swiper-button-next',
         prevEl: '.browse-our__swiper-button-prev',
      },
   });
}
media();
//===========================
const checkbox = document.querySelector(".application__input_checkbox");
const checkboxBtn = document.querySelector(".application__btn-wrapper");
checkbox.addEventListener("click", () => {
   if (!checkbox.checked) {
      checkboxBtn.classList.add("application__btn-wrapper_off");
      checkboxBtn.setAttribute('disabled', '');
   }
   else {
      checkboxBtn.classList.remove("application__btn-wrapper_off");

      checkboxBtn.removeAttribute('disabled');
   }
})
//=====================================
const goTopBtn = document.querySelector(".footer__item-bottom-end-btn");
goTopBtn.addEventListener('click', () => {
   window.scroll({
      top: -Infinity,
      left: 0,
      behavior: "smooth",
   })
});
//=========================================
const burgerMenu = document.querySelector(".header__nav-main_burger-menu");
const burger = document.querySelector(".header__nav-main_burger-icon-wrapper");
burger.addEventListener('click', () => {
   burgerMenu.classList.toggle('header__nav-main_burger-menu-off');
})
//================
