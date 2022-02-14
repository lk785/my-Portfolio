//scrooling start here
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//scrooling ends here

//200 Building a slider componenet --Part-1
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  console.log(dotContainer);
  let curSlide = 0;
  const maxSlide = slides.length;
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  //functions
  //function for creating dots for each images
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //function for activating dots
  const activateDots = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  //function for going or moving to slides
  const goToSlide = function (slide) {
    slides.forEach(
      //actual code for sliding
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //next slide
  const nextslide = function () {
    //checking if the the current slide is last picture
    if (curSlide === maxSlide - 1) {
      //if true move back to first picture on right button click
      curSlide = 0;
    } else {
      //if false move(slide) forward
      curSlide++;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  //previous slide
  const prevSlide = function () {
    //checking if the current slide is first picture
    if (curSlide === 0) {
      //if true move to last picture on left button click
      curSlide = maxSlide - 1;
    } else {
      //if false move(slide) backward
      curSlide--;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  //all function that we need whenever open the website
  const init = function () {
    //will show first slide
    goToSlide(0);
    //will create dots
    createDots();
    //here whenever we will open the website it will help in showing the first dot activated as we will have first img always
    activateDots(0);
  };
  init();

  //All EventListenetr start here
  btnRight.addEventListener("click", nextslide);
  btnLeft.addEventListener("click", prevSlide);

  //event to move picture when left or right arrow on keyboard is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextslide();
  });

  dotContainer.addEventListener("click", function (e) {
    //here we are checling whether the clicked event is clicked on dot
    if (e.target.classList.contains("dots__dot")) {
      //if true then we are striong the dataset slide value in slide
      const { slide } = e.target.dataset;
      //calling goto slide function which will bring the image by passing slide value taken drom dataset
      goToSlide(slide);
      activateDots(slide);
    }
  });
};
slider();
console.log("hello");
