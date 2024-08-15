'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

(function() {
      emailjs.init("ZmzDHQRISr2393Tm1");  
  })();

   document.querySelector('.form-btn').addEventListener('click', function() {
      const form = document.getElementById('contact-form');
      
      // Extract the form data
      const fullName = form.elements['fullname'].value;
      const email = form.elements['email'].value;
      const message = form.elements['message'].value;

      // Send the email using EmailJS
      emailjs.send('skill_lu5bu8b', 'template_yw57btq', {
          from_name: fullName,
          from_email: email,
          message: message
      })
      .then(function(response) {
         alert('Message sent successfully!');
      }, function(error) {
         alert('Failed to send message, please try again later.');
      });
   });


