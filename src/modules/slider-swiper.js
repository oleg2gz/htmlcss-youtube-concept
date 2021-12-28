const sliderSwiper = () => {
  const swiperMyChannel = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })

  const swiperRecommended = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    },
  })

  const swiperFoodDrink = new Swiper('.food-drink-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.food-drink-button-next',
      prevEl: '.food-drink-button-prev',
    },
  })

  // Show only
  if (document.documentElement.scrollWidth <= 640) {
    swiperMyChannel.destroy()
    swiperRecommended.destroy()
    swiperFoodDrink.destroy()
  }
}

export default sliderSwiper

// TODO:
// - Problem with >= 640px
