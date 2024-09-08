'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");


sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


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



document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("kMEmCCArSszoMwvDN"); 

    document.querySelector('.form-btn').addEventListener('click', function(event) {
        event.preventDefault(); 

        const form = document.querySelector('form[data-form]');
        if (!form) {
            console.error('Form with data-form attribute not found.');
            return;
        }

        const fullName = form.elements['fullname'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

         if (!fullName || !email || !message) {
            alert('Please fill in all the required fields before submitting.');
            return; 
        }
                
        emailjs.send('service_vghf9xr', 'template_1xq19vm', {
            from_name: fullName,
            from_email: email,
            message: message
        })
        .then(function(response) {
            alert('Message sent successfully!');
          form.reset();
        }, function(error) {
            console.error('Email sending failed:', error);
            alert('Failed to send message, please try again later.');
        });
    });
});


