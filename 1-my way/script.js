let $ = document;
let wrapperAccEls = $.querySelectorAll(".wrapper-acc");
wrapperAccEls.forEach((wrapperAccEl) => {
  wrapperAccEl.addEventListener("click", (e) => {
    let wrapperAcc = e.target.closest(".wrapper-acc");
    if (!wrapperAcc.classList.contains("active")) {
      closeAccs();
      openAcc(e);
    } else {
      closeAcc(e);
    }
  });
});
// for open one tab
function openAcc(e) {
  let wrapperAcc = e.target.closest(".wrapper-acc");
  let wrapperAccContent = e.target
    .closest(".wrapper-acc ")
    .querySelector(".content");
  let wrapperAccBtn = e.target.closest(".wrapper-acc").querySelector(".toggle");
  let wrapperAccBtnIcon = e.target
    .closest(".wrapper-acc")
    .querySelector(".toggle i");
  wrapperAcc.classList.add("active");
  wrapperAccContent.style.height = wrapperAccContent.scrollHeight + "px";
  wrapperAccBtn.style.color = "#0084e9";
  wrapperAccBtnIcon.classList.remove("fa-plus");
  wrapperAccBtnIcon.classList.add("fa-minus");
}
// for close one tab
function closeAcc(e) {
  let wrapperAcc = e.target.closest(".wrapper-acc");
  let wrapperAccContent = e.target
    .closest(".wrapper-acc ")
    .querySelector(".content");
  let wrapperAccBtn = e.target.closest(".wrapper-acc").querySelector(".toggle");
  let wrapperAccBtnIcon = e.target
    .closest(".wrapper-acc")
    .querySelector(".toggle i");
  wrapperAcc.classList.remove("active");
  wrapperAccContent.style.height = "0px";
  wrapperAccBtn.style.color = "#111130";
  wrapperAccBtnIcon.classList.remove("fa-minus");
  wrapperAccBtnIcon.classList.add("fa-plus");
}
// for close all tabs
function closeAccs() {
  let wrapperAccEls = $.querySelectorAll(".wrapper-acc");
  let wrapperAccContentEls = $.querySelectorAll(".content");
  let wrapperAccBtnEls = $.querySelectorAll(".toggle");
  let wrapperAccBtnIconEls = $.querySelectorAll(".toggle i");
  for (let i = 0; i < wrapperAccContentEls.length; i++) {
    wrapperAccEls[i].classList.remove("active");
    wrapperAccContentEls[i].style.height = "0px";
    wrapperAccBtnEls[i].style.color = "#111130";
    wrapperAccBtnIconEls[i].classList.remove("fa-minus");
    wrapperAccBtnIconEls[i].classList.add("fa-plus");
  }
}
