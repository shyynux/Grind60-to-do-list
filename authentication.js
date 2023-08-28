/* create login, signup and logout feature */

/* Add Pop-up Overlay */
const popupOverlay = document.createElement("div");
popupOverlay.classList.add("popup-overlay");

/* the login button was pressed */
const loginButton = document.getElementById("login");

loginButton.addEventListener("click", function(){

    /* a pop up will open that will log the user in */
    // Create the popup content
    const popupContent = createLoginPopup();
    console.log("the button was clicked and pop-up created.")

     // Add the popup content to the overlay and display it
     popupOverlay.innerHTML = "";
     popupOverlay.appendChild(popupContent);
     document.body.appendChild(popupOverlay);
     popupOverlay.style.display = "flex";

     /*clear input fields*/
    //  taskNameInput.value = "";
    //  problemLinkInput.value = "";
    //  taskCheckbox.checked = false;

     /* Close the popup */
    //  popupOverlay.style.display = "none";
});

function createLoginPopup(){
    /* a login button as well */
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

   /* create user-name/email-id box and a password box */
    /* a login button as well */
    const username = document.createElement("input");
    username.type = "text";
    username.placeholder = "Enter username or email-id";
    username.id = "task-name";

    const password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Your password please";
    password.id = "task-name";

    const loginPopupButton = document.createElement("button");
    loginPopupButton.textContent = "Log-in";
    loginPopupButton.classList.add("button-container");

    popupContent.appendChild(username);
    popupContent.appendChild(password);
    popupContent.appendChild(loginPopupButton);

    return popupContent;
}

/* the sign up button */

const signupButton = document.getElementById("signup");
let signupUsername;
let signUpPassword;
let signUpPassword2;
let signupCreateAccountbutton;
let passwordMismatchErrorLabel;

/* the signup button was pressed */
signupButton.addEventListener("click", function(){

    /* a pop up will open that will let the user sign up */
    const popupContent = createSignupPopup();
    console.log("the Signup button was clicked and pop-up created.")

     popupOverlay.innerHTML = "";
     popupOverlay.appendChild(popupContent);
     document.body.appendChild(popupOverlay);
     popupOverlay.style.display = "flex";

     /* the user enters the inputs */
     signupCreateAccountbutton.addEventListener("click", function(){
        if (signUpPassword.value !== signUpPassword2.value) {
            passwordMismatchErrorLabel.textContent = "Passwords do not match.";
          } else {
            passwordMismatchErrorLabel.textContent = ""; // Clear the error message
          }
     });

    /* click the close button */
     /* Close the popup */
    //  popupOverlay.style.display = "none";
});

/* create the signup popup */
function createSignupPopup(){
      /* a signup button as well */
      const popupContent = document.createElement("div");
      popupContent.classList.add("popup-content");
  
     /* username, email-id,
     choose password, retype password, city where your mom went to school */

      const username = document.createElement("input");
      username.type = "text";
      username.placeholder = "Choose a unique username";
      username.id = "user-name";
    
      const password = document.createElement("input");
      password.type = "password";
      password.placeholder = "Pick a strong password.";
      password.id = "new-password";

      const retypePassword = document.createElement("input");
      retypePassword.type = "password";
      password.placeholder = "Please retype it.";
      password.id = "retyped-password";
  
      const finalSignupButton = document.createElement("button");
      finalSignupButton.textContent = "Create account";
      finalSignupButton.classList.add("button-container");

      const passwordMismatchError = document.createElement("label");
      passwordMismatchError.id = "passwordMismatchError";

      passwordMismatchErrorLabel = passwordMismatchError;

      signupUsername = username;
      signUpPassword = password;
      signUpPassword2 = retypePassword;
      signupCreateAccountbutton = finalSignupButton;
  
      popupContent.appendChild(username);
      popupContent.appendChild(password);
      popupContent.appendChild(retypePassword);
      popupContent.appendChild(passwordMismatchError);
      popupContent.appendChild(finalSignupButton);
  
      return popupContent;
}