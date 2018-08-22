$(document).ready(function() {
  /*Hamburger menu*/
  let hamburger = (options => {
    let button = document.querySelector(options.button);
    let menu = document.querySelector(options.menu);
    let body = document.querySelector("body");

    let itemsList = document.getElementById("nav__list--hamburger").children;
    itemsList = Array.prototype.slice.call(itemsList);

    const items = $(".nav__item", menu);
    let counter = 0;

    let startMenuAnimation = function startMenuAnimation() {
      let item = items.eq(counter);
      item.toggleClass("pulse");
      counter++;
      if (counter < items.length) {
        setTimeout(startMenuAnimation, 100);
      }
      if (counter === items.length) counter = 0;
    };

    let _toggleMenu = function(e) {
      button.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      body.classList.toggle("locked");
      startMenuAnimation();
    };

    var closeMenu = function closeMenu() {
      button.classList.remove("is-active");
      menu.classList.remove("is-active");
      body.classList.remove("locked");
      startMenuAnimation();
    };

    let addListeners = function() {
      button.addEventListener("click", _toggleMenu);

      for (i = 0; i < itemsList.length; i++) {
        itemsList[i].addEventListener("click", closeMenu);
      }
    };

    document.addEventListener("keydown", function(e) {
      if (e.keyCode == 27) closeMenu();
    });

    return {
      init: addListeners
    };
  })({
    button: "#hamburger-menu-link",
    menu: "#hamburger-menu"
  });

  hamburger.init();

  /*horaccordeon*/
  let teamAccoJS = () => {
    let oTeamLink = document.querySelectorAll(".team__accordeon-link");

    oTeamLink.forEach(function(personName) {

      personName.addEventListener("click", function(e) {
        e.preventDefault();
        let activePerson = document.querySelector(".team__accordeon-item.is-active");

        if (activePerson) {
          let teamAccordeonDesc = activePerson.querySelector(".team__accordeon-desc")

          teamAccordeonDesc.style.height = "0px";
          activePerson.classList.remove("is-active");
        }

        if (!activePerson || activePerson.querySelector(".team__accordeon-link") !== this) {
          let currentPerson = this.closest(".team__accordeon-item");
          currentPerson.classList.add("is-active");

          let currentPersonInfo = currentPerson.querySelector(".team__accordeon-desc");
          currentPersonInfo.style.height = currentPersonInfo.scrollHeight + "px";
        }
      })
    })
  };
  teamAccoJS();

  /*veraccordeon*/
  let verticalAcco = () => {
    let calculateWidth = () => {
      let windowWidth = $(window).width();
      let links = $(".menu__accordeon-link");
      let linksWidth = links.width();
      let reqWidth = windowWidth - linksWidth * links.length;
      return reqWidth > 550 ? 550 : reqWidth;
    };
    let oTeamLink = document.querySelectorAll(".menu__accordeon-link");
    oTeamLink.forEach(function(personName) {

      personName.addEventListener("click", function(e) {
        e.preventDefault();
        let activePerson = document.querySelector(".menu__accordeon-item.active");
        // let otherPerson = document.querySellectorAll(".menu__accordeon-item");

        if (activePerson) {
          let teamAccordeonDesc = activePerson.querySelector(".menu__accordeon-content");

          teamAccordeonDesc.style.width = "0px";
          activePerson.classList.remove("active");
        }

        if (!activePerson || activePerson.querySelector(".menu__accordeon-link") !== this) {
          let currentPerson = this.closest(".menu__accordeon-item");
          currentPerson.classList.remove("hidden");
          currentPerson.classList.add("active");

          let currentPersonInfo = currentPerson.querySelector(".menu__accordeon-content");
          currentPersonInfo.style.width = calculateWidth() + "px";
        }
      })
    })
  };
  verticalAcco();

  /*Slider*/
  let owlCarousel = () => {
    const burgerCarousel = $(".slider__list").owlCarousel({
      items: 1,
      nav: true,
      navContainer: $(".slider__controls"),
      navText: ["", ""],
      loop: true
    });

    $(".slider__btn-next").on("click", e => {
      e.preventDefault();
      burgerCarousel.trigger("next.owl.carousel");
    });

    $(".slider__btn-prev").on("click", e => {
      e.preventDefault();
      burgerCarousel.trigger("prev.owl.carousel");
    });
  };

  owlCarousel();
});
