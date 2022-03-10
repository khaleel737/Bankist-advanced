'use strict';

///////////////////////////////////////
// Modal window
const slider = function () {
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btns => btns.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Selecting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header = document.querySelector('.header')

// Node List
const allSections = document.querySelectorAll('.section');

console.log(allSections);


// HTML Collections
document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// Ex: insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We Use Cookies For Improved Functionality and Analytics`;
// Inner HTML can be used to read and write properties.
message.innerHTML = `We Use Cookies For Improved Functionality and Analytics <button class='btn btn--close-cookie'>Got It!!!</button>`;

// header.prepend(message)

// We can also clone the cookie message instead of copying
header.append(message)
// header.append(message.cloneNode(true));

// header.before(message)
// header.after(message)

// .cloneNode(TrackEvent)

// console.log(TrackEvent);

// Removing the cookie message

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove()
  message.parentElement.removeChild(message)
})

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Console logging styles will only show the styles we set in the DOM
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Changing Primary Styles using documentElement

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

// This will not work as its not standard, we need to use get attribute
// console.log(logo.btn_class);
// console.log(logo.getAttribute('class'));
// logo.alt = 'Beautiful Sexy Logo Right There!!!'
// logo.setAttribute('company', 'Bankist')

// console.log(logo.getAttribute('src'));

// const twitter = document.querySelector('.twitter-link');

// console.log(twitter.href);
// console.log(twitter.getAttribute('href'));

// Data Attributes (Has to start with DATA)

// console.log(logo.dataset.versionNumber);

// CDATA_SECTION_NODE


// Classes
// Can add multiple class properties
// logo.classList.add('c', 'c')
// logo.classList.remove('c', 'c')
// logo.classList.toggle('c', 'c')
// logo.classList.contains('c', 'c') //It is containes and not includes like arrays
// logo.className = 'Khaleel';


const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', (e) => {
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);
// console.log(e.target.getBoundingClientRect());


// console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);

// console.log('Height/Width of Viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

// Scroll To

// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + pageYOffset)

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset, 
//   top: s1coords.top + pageYOffset,
//   behavior: "smooth",
// })

// OR modern scrolling


// })


// Page Navigation

btnScrollTo.addEventListener('click', () => {

  section1.scrollIntoView({behavior: 'smooth'});
})


// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function (e, i) {
//     e.preventDefault()
//     console.log('Link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

// 1. Add event listener to the common parent element.
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matching Strategy 

if(e.target.classList.contains('nav__link')) {
  e.preventDefault()
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    
}

})

// Experimentation
// })
// const alertH1 = (e) => {
//   alert('add Event Listener: Your are reading the heading')

//   // Remove the eventlistener after job is done

//   h1.removeEventListener('mouseenter', alertH1)
//   };

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', alertH1)


// // Remove eventlistener with timeout

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1)
// }, 3000);
// Old school event listeners

// h1.onmouseenter = (e) => alert('add Event Listener: Your are reading the heading')


// Random number generator rgb(255, 255, 255)

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());
// console.log(randomInt(0, 255));

// const navLink = document.querySelector('.nav__link')


// // getComputedStyle(navLink)

// navLink.addEventListener('click', function (e) {
// // console.log(e.target)

// getComputedStyle('')
// console.log(this.style.backgroundColor);
// this.style.backgroundColor = randomColor();
// console.log(e.target,e.currentTarget, 'NAVLINK');
// console.log(e.currentTarget === this);

// // Stop Propagation

// e.stopPropagation()

// });

// document.querySelector('.nav__links').addEventListener('click', function (e) { 

// this.style.backgroundColor = randomColor();
// console.log(e.target, e.currentTarget,  'NAVLINKS');

// })
// // CurrentTarget === this keyword
//   document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, e.currentTarget, 'NAV');


//   }, true)



const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
// Going Downwards
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white'

// Going Upwards(Parents Nodes)
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'

h1.closest('h1').style.background = 'var(--gradient-primary)'

// Going sideways (siblings)

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1) el.style.transform = `scale(0.5)`
// })




// Tapped components

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
const clicked = e.target.closest('.operations__tab');
// console.log(clicked);


// A Guard Clause
if(!clicked) return;

// Remove Active Classes
tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
tabsContent.forEach(cont => cont.classList.remove('operations__content--active'));



// Activate Content Area
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

clicked.classList.add('operations__tab--active')

});

// Menu Event Animation

//🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁
const fading = function (e) {
  console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const links = e.target;
    const siblings = links.closest('.nav').querySelectorAll('.nav__link');
    const logo = links.closest('.nav').querySelector('img');
    
    siblings.forEach(elements => {
      if(elements !== links)  elements.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

// Passing an argument into a handler
nav.addEventListener('mouseover', fading.bind(0.5));
nav.addEventListener('mouseout',fading.bind(1));
//🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁


// Sticky Navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
// console.log(this.window.scrollY);
// nav.classList.remove('sticky')
// if(this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
// })


// Sticky Navigation (Intersection Observer API)
//🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁

// const obsCallBack = function (entries, observer) {
// entries.forEach(scroll => console.log(scroll))
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1)
//🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁



// Nav Sticky using Intersection Observer API
//🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁

const headerTwo = document.querySelector('header');

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  nav.classList.remove('sticky')
  if(!entry.isIntersecting) nav.classList.add('sticky')
  // else   nav.classList.remove('sticky')

}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header)

//🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁

// Reveal Sections
const revealSections = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden')

  observer.unobserve(entry.target);
}

const allSectionsTwo = document.querySelectorAll('.section')

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSectionsTwo.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})





// Lazy Images

const imgTarget = document.querySelectorAll('img[data-src]')

const loadingimg = function (entries, observer) {
const [entry] = entries;
// console.log(entry);

if(!entry.isIntersecting) return;

entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load', function () {
  entry.target.classList.remove('lazy-img');

})
observer.unobserve(entry.target);

};

const imgObserver = new IntersectionObserver(loadingimg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px'
})

imgTarget.forEach(img => imgObserver.observe(img))
// section--hidden




// Slider 


const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots')

let currentSlide = 0;
const maxSlides = slides.length;


// slider.style.transform = `scale(0.3) translateX(-1300px)`;
// slider.style.overflow = 'visible';

const slidingX = function(entries, observer) {
const [entry] = entries;
console.log(entry);
}

const slideObserver = new IntersectionObserver(slidingX, {});

const goToSlide = function (slide) {

  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);  

}


// Next Slide

const nextSlide = function () {
  if(currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide)
  activateDots(currentSlide)
}

const prevSlide = function () {
  if(currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDots(currentSlide)
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide)


// Keyboard Events

document.addEventListener('keydown', function(e) {
  console.log(e)
  if(e.key === `ArrowLeft`) prevSlide();
  e.key === `ArrowRight`&& nextSlide();
})


// Dots Creation

const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`)
  })
}

const activateDots = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => {
    dot.classList.remove('dots__dot--active');
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  })
}


// Event Function

const init = function () {
  goToSlide(0)
  createDots()
  activateDots(0)
}
init();
dotContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {

    // console.log('DOT');
    const {slide} = e.target.dataset
    goToSlide(slide)
    activateDots(slide)
  }
  })

}
slider();
// btnLeft.addEventListener('click', function(e) {
//   currentSlide++;
  
//   slide.forEach((slides, index) => slides.style.transform = `translateX(${100 * (index + currentSlide)}%)`);  

// });

// (e) => {
  //   if (e.target.classList.contains('nav__link')) {
  //     const links = e.target;
  //     const siblings = links.closest('.nav').querySelectorAll('.nav__link');
  //     const logo = links.closest('.nav').querySelector('img');
      
  //     siblings.forEach(elements => {
  //       if(elements !== links)  elements.style.opacity = 0.5;
  //     })
  //     logo.style.opacity = 0.5;
  //   }


  document.addEventListener('DOMContentLoaded', (e) => {
    console.log(e, 'HTML Parsed and Dom Tree Built !!!');
  })

  window.addEventListener('load' , (e) => {
    console.log(e, 'Page Fully Loaded');
  })

  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   e.returnValue = 'Does Not work as people abused it before and google decided to make a generic leaving window.';
  // })