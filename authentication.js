/* create login, signup and logout feature */

/* Add Pop-up Overlay */
const popupOverlay = document.createElement("div");
popupOverlay.classList.add("popup-overlay");

/* the login button was pressed */

const loginButton = document.getElementById("login");

loginButton.addEventListener("click", function(){
    /* Redirect the user to the login.html page */
    // window.location.href = 'login.html';

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