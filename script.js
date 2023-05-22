window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var sticky = navbar.offsetTop;
  
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }