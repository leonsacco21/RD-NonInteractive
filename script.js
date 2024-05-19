  //Password Field micro interaction
  document.addEventListener("DOMContentLoaded", function() {
  
      // hide/show password
      document.querySelectorAll(".icon-wrapper").forEach(function(iconWrapper) {
          iconWrapper.addEventListener("click", function() {
              var eyeSvg = iconWrapper.querySelector('.eye-svg');
              var input = document.querySelector(document.querySelector(".toggle-password").getAttribute("toggle"));
              if (input.getAttribute("type") === "password") {
                  input.setAttribute("type", "text");
                  eyeSvg.src = 'src/eye-off.svg';
              } else {
                  input.setAttribute("type", "password");
                  eyeSvg.src = 'src/eye.svg';
              }
          });
      });
  });
