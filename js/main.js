
if (document.querySelector('.accordion-list')) {
  new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active',
    duration: 200,
  });
}

if (document.querySelector('.hero__title--red')) {
  setTimeout(() => document.querySelector('.hero__title--red').classList.add('hero__title--red--active'), 1000)
};


if (document.querySelector('.program__button')) {
  const tab_btns = document.querySelectorAll('.program__button');
  const tab_items = document.querySelectorAll('.card');

  tab_btns.forEach((element) => {
    element.addEventListener('click', (event) => {
      const path = event.currentTarget.dataset.path;

      tab_btns.forEach((btn) => { btn.classList.remove('program__button--active') });
      event.currentTarget.classList.add('program__button--active');

      tab_items.forEach((item) => { item.classList.remove('card--active--opacity') });
      tab_items.forEach((item) => { item.classList.remove('card--active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('card--active')
      setTimeout(() => { document.querySelector(`[data-target="${path}"]`).classList.add('card--active--opacity') }, 1)
    });
  });
};



if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    effect: 'creative',
    creativeEffect: {

      prev: {
        translate: [-100, 0, -300],
        opacity: 0,
      },

      next: {
        translate: [`100%`, 0, 0],
        opacity: 1,
      },
    },

    breakpoints: {
      1025: {
        effect: 'creative',
        creativeEffect: {
          prev: {
            translate: [0, 0, 0],
            opacity: 0,
          },

          limitProgress: 2,

          next: {
            translate: [`70%`, -40, -250],
            opacity: 1,
          },
        },
      },


    },

    navigation: {
      nextEl: '.swiper__btn--next',
      prevEl: '.swiper__btn--prev',
    },


  })
};

if (document.querySelector('.payment__input[type="tel"]')) {
  const selector = document.querySelector('.payment__input[type="tel"]');

  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

  new JustValidate('.payment__form', {

    rules: {
      email: {
        required: true,
        email: true
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },

      name: {
        required: true,
        minLength: 2
      },

      surname: {
        required: true,
        minLength: 2
      }
    },

    messages: {
      name: {
        minLength: 'Минимально колличество символов - 2',
        required: 'Поле обязательное для заполнения'
      },

      surname: {
        minLength: 'Минимально колличество символов - 2',
        required: 'Поле обязательное для заполнения'
      },

      email: 'Введите корректную почту',

      tel: {
        required: 'Поле обязательное для заполнения',
        function: 'Минимально колличество символов - 11'
      }
    },

  });
};


if (document.querySelector('.burger')) {

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__list');
  const links = document.querySelectorAll('.header__link');

  burger.addEventListener('click', () => {

    links.forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('stop-scroll')
        menu.classList.remove('header__list--active');
        burger.classList.toggle('burger--active')
      });
    });
    burger.classList.toggle('burger--active')
    menu.classList.toggle('header__list--active');
    document.body.classList.toggle('stop-scroll');
  })

};
