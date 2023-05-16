window.onscroll = function(){myFunction()};

var header = document.getElementById("navigation-box");
var sticky = header.offsetTop;

function myFunction(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky");
    }
}
// added functions
function coreValue(){
    var contact = document.querySelector('#core-values');
    contact.style.backgroundColor='#0F4C75';
}

function contactNumber(){
    var contact = document.querySelector('#contact-number');
    contact.style.backgroundColor='#ffffff';
}

function emailAddress(){
    var email = document.querySelector('#email');
    email.style.backgroundColor='#ffffff';
}

function mapLocation(){
    var address = document.querySelector('#address');
    address.style.backgroundColor = '#ffffff';
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-box");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const buttons = document.querySelectorAll("[data-slide-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-slider]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  });
});

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      square = entry.target.querySelector('.third-section-content');

      if (entry.isIntersecting) {
        square.classList.add('wipe-animation');
        return;
      }

      square.classList.remove('wipe-animation');
    });
  });
observer.observe(document.querySelector('.third-section'));

observer02 = new IntersectionObserver(entries => {
entries.forEach(entry => {
    square02 = entry.target.querySelector('.first-section-content');
    if (entry.isIntersecting) {
    square02.classList.add('slidein-animation');
    return;
    }

    square02.classList.remove('slidein-animation');
    });
});
observer02.observe(document.querySelector('.first-section'));

observer03 = new IntersectionObserver(entries03 => {
    entries03.forEach(entry03 => {
        square03 = entry03.target.querySelector('.forth-section-content');
        if (entry03.isIntersecting) {
        square03.classList.add('slidein-animation');
        return;
        }

        square03.classList.remove('slidein-animation');
    });
});
observer03.observe(document.querySelector('.forth-section'));