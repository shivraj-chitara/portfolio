function checkScrollDirection(event) {
  let navbar = document.querySelector(".navbar");
  if (checkScrollDirectionIsUp(event)) {
    navbar.classList.remove("md:relative");
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbar.classList.add("box-shadow");
    } else {
      navbar.classList.remove("box-shadow");
    }
  } else {
    navbar.classList.add("md:relative");
    navbar.classList.remove("box-shadow");
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

function showNav(setNav) {
  setNav(true);
}

function hideNav(setNav) {
  setNav(false);
}

window.addEventListener("mouseup", function (event) {
  let box = document.querySelector(".navbar");
  if (
    event.target != box &&
    event.target.parentNode != box &&
    event.target != document.querySelector(".hamburger") &&
    event.target.parentNode != document.querySelector(".hamburger")
  ) {
    hideNav();
  }
});

window.addEventListener("wheel", checkScrollDirection);
