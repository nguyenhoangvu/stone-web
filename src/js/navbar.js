const $dropdownBtn = $('.dropdown-button');
const $closeBtn = $('.closebtn');
const $menuLink = $('#navbarBackground a');
let check = false
$dropdownBtn.click(function () {
  if (check === false) {
    document.getElementById("navbarBackground").style.height = "100%";
    check = true
  }
  else {
    document.getElementById("navbarBackground").style.height = "0%";
    check = false
  }
})

$menuLink.click(function () {
  document.getElementById("navbarBackground").style.height = "0%";
})


setActiveLink();
$(window).on('hashchange', function () {
  setActiveLink();
});

function setActiveLink() {
  let currentURL = window.location.href;
  let path = window.location.pathname;
  if (path === '/') {
    $("#home-btn").addClass('active');
    document.querySelectorAll(".navbar-nav .nav-link").forEach(p => {
      if (currentURL.indexOf(p.getAttribute("href")) !== -1 && p.getAttribute("href") !== "/") {
        $(".navbar-nav .nav-link").removeClass("active");
        p.classList.add("active");
      }
    });
  }
  if (path === '/our-service/') {
    $("#service-btn").addClass('active');
  }
  if (path === '/career/' || path === '/job-application/') {
    $("#career-btn").addClass('active-color');
  }
  return (false);
}