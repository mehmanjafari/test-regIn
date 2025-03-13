const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabMe = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let nodeBtn = item;
    let tabId = nodeBtn.getAttribute("data-tab");
    let nodeTab = document.querySelector(tabId);

    if (!nodeBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabMe.forEach(function (item) {
        item.classList.remove("active");
      });

      nodeBtn.classList.add("active");
      nodeTab.classList.add("active");
    }
  });
});
document.querySelector(".tabs__nav-btn").click();

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");
  let selectArrow = document.querySelector(".header-select__toggle-icon");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
    selectArrow.classList.toggle("active");
  }

  function selectChoose() {
    let text = this.innerText,
      flagSrc = this.dataset.flag,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current"),
      currentIcon = select.querySelector(".header-select__country > img");

    currentText.innerText = text;
    currentIcon.src = flagSrc;
    select.classList.remove("is-active");
    selectArrow.classList.remove("active");
  }
};
select();

let formSignInOrRegIn = function () {
  let signInRegIns = document.querySelectorAll(".js-signIn__regIn");

  signInRegIns.forEach((signInRegIn) => {
    let form = signInRegIn.closest(".form");
    let formBtns = form.querySelectorAll(".js-form__btn");
    let formResetEls = form.querySelectorAll(".js-form__el");
    let isSignIn = true;

    signInRegIn.addEventListener("click", () => {
      if (isSignIn) {
        signInRegIn.textContent = "Зарегистрироваться";
        formBtns.forEach((formBtn) => {
          formBtn.textContent = "Войти";
        });
        formResetEls.forEach((el) => {
          el.classList.add("hidden");
        });
      } else {
        signInRegIn.textContent = "Войти";
        formBtns.forEach((formBtn) => {
          formBtn.textContent = "Зарегистрироваться";
        });
        formResetEls.forEach((el) => {
          el.classList.remove("hidden");
        });
      }

      isSignIn = !isSignIn;
    });
  });
};

formSignInOrRegIn();
