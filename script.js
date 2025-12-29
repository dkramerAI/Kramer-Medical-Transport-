// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav");

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      this.classList.toggle("active");

      // Animate hamburger to X with smooth transition
      const spans = this.querySelectorAll("span");
      if (nav.classList.contains("active")) {
        spans[0].style.transform = "translateY(8.5px) rotate(45deg)";
        spans[1].style.opacity = "0";
        spans[1].style.transform = "scaleX(0)";
        spans[2].style.transform = "translateY(-8.5px) rotate(-45deg)";
        document.body.style.overflow = "hidden";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[1].style.transform = "scaleX(1)";
        spans[2].style.transform = "none";
        document.body.style.overflow = "";
      }
    });

    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        mobileToggle.classList.remove("active");
        const spans = mobileToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[1].style.transform = "scaleX(1)";
        spans[2].style.transform = "none";
        document.body.style.overflow = "";
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", function () {
        // Close other open items
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
        // Toggle current item
        item.classList.toggle("active");
      });
    }
  });
});
