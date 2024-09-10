(function () {
  //toggle password visibility
  const toggleButton = document.getElementById("toggle-password-visibility");
  const passwordInput = document.getElementById("password");
  const openEye = document.querySelector(".open");
  const closeEye = document.querySelector(".close");

  toggleButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.setAttribute("aria-label", "Hide Password");
      closeEye.style.display = "none";
      openEye.style.display = "inline";
    } else {
      passwordInput.type = "password";
      toggleButton.setAttribute(
        "aria-label",
        "Show Password" + "Warning: This will display your password on screen"
      );

      openEye.style.display = "none";
      closeEye.style.display = "inline";
    }
  });

  //form submission
  const formElement = document.querySelector("form");
  const signInBtn = document.querySelector("button[type=submit]");

  formElement.addEventListener("submit", function onSubmit(e) {
    e.preventDefault();
    signInBtn.setAttribute("disabled", "disabled");

    setTimeout(function () {
      console.log("Done!");
      signInBtn.removeAttribute("disabled");
    }, 2000);
  });
})();
