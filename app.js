const openAddPopup = document.getElementById("open-add-popup"); /* open add task pop-up */
const taskList = document.getElementById("task-list"); /* get whole-list */
const openDeleteAllPopup = document.getElementById("delete-all"); /*clears task list */
const addTaskButton = document.createElement("button");
const YdeleteAll = document.createElement("button");
const NdeleteAll = document.createElement("button");
const textInput = document.createElement("input");
const linkInput = document.createElement("input");
const checkboxInput = document.createElement("input");

/* Add Pop-up Overlay */
const popupOverlay = document.createElement("div");
popupOverlay.classList.add("popup-overlay");

/* Opens the popup when the button is clicked */
openAddPopup.addEventListener("click", function () {
    // Create the popup content
    const popupContent = createPopupContent();
    console.log("the button was clicked and pop-up created.")

     // Add the popup content to the overlay and display it
     popupOverlay.innerHTML = "";
     popupOverlay.appendChild(popupContent);
     document.body.appendChild(popupOverlay);
     popupOverlay.style.display = "flex";

    console.log("What is the pop-up content?",popupContent);

    /*The Add Task button is clicked */
    addTaskButton.addEventListener("click", function(){
    
    /* the inputs */
    const taskNameInput = document.getElementById("task-name");
    const problemLinkInput = document.getElementById("problem-link"); /*optional*/
    const taskCheckbox = document.getElementById("input-checkbox");

    console.log("the add task button was clicked, WOW");
    console.log("what's the text mate?", textInput.value);

    /* validations */
    const taskName = taskNameInput.value.trim();
    const problemLink = problemLinkInput.value.trim();
    const isCompleted = taskCheckbox.checked;

    /* Add a new task to the list*/
    if(taskName != ""){
        const listItem = document.createElement("li");
        
        /*create checkbox, label, link(if present) 
        and delete and edit buttons */
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isCompleted;

        /* task content */
        const contentElement = createContentElement(taskName, problemLink);

        /* create edit button */
        const editIcon = document.createElement("img");
        editIcon.src = "graphics/edit-icon.png";
        editIcon.alt = "Edit";
        editIcon.classList.add("edit-icon");

        /* create delete button */
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "graphics/delete-icon.png";
        deleteIcon.alt = "Delete";
        deleteIcon.classList.add("delete-icon");

        console.log("just checkin out for ya", checkbox);
        console.log("just checkin out for ya", contentElement.textContent);
        console.log("just checkin out for ya", editIcon);
        console.log("just checkin out for ya", deleteIcon);
        

         /* now we append all things to the list */
         listItem.append(checkbox);
         listItem.append(contentElement);
         listItem.append(editIcon);
         listItem.append(deleteIcon);
 
         console.log("LIST ITEM -- ", listItem);
         /* append this task-item to the task-list */
         taskList.append(listItem);

        /*clear input fields*/
        taskNameInput.value = "";
        problemLinkInput.value = "";
        taskCheckbox.checked = false;

        /* Close the popup */
        popupOverlay.style.display = "none";
    }
    });
});

/* a function that creates content the pop-up will have */
function createPopupContent(){
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    /* Add input fields - task name, link and checkbox */
   // creating these publicly
    textInput.type = "text";
    textInput.placeholder = "Enter task text";
    textInput.id = "task-name";

   
    linkInput.type = "text";
    linkInput.placeholder = "Add Task Link (optional)";
    linkInput.id = "problem-link";

    
    checkboxInput.type = "checkbox";
    checkboxInput.id = "input-checkbox";

    /*create Add task button*/
    // created above
    addTaskButton.textContent = "Add Task";
    addTaskButton.classList.add("button-container");

    popupContent.appendChild(textInput);
    popupContent.appendChild(linkInput);
    popupContent.appendChild(checkboxInput);
    popupContent.appendChild(addTaskButton);

    return popupContent;
}

function createContentElement(taskName, link){
    if(link !== "") {
        const linkElement = document.createElement("a");
        linkElement.href = link;
        linkElement.textContent = taskName;
        linkElement.target = "_blank"; // Open link in a new tab
        return linkElement;
        }
    else{
        const labelElement = document.createElement("label");
        labelElement.textContent = taskName;
        return labelElement;
    }
}

openDeleteAllPopup.addEventListener("click", function(){
/* this button will delete all existing tasks */
/* let's open a pop-up which will confirm w the user */

    const delPopupContent = createYesNoPopup();
    console.log("the button was clicked and pop-up created.")

     // Add the popup content to the overlay and display it
     popupOverlay.innerHTML = "";
     popupOverlay.appendChild(delPopupContent);
     document.body.appendChild(popupOverlay);
     popupOverlay.style.display = "flex";

    console.log("What is the pop-up content?",delPopupContent);

    /*The Yes button is clicked */
    YdeleteAll.addEventListener("click", function(){
    
        /*clear the task list */
         // Remove all child nodes (list items) from the task list
        while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
        }

        /*then close the pop-up */
        popupOverlay.style.display = "none";

    });
     /*The No button is clicked */
    NdeleteAll.addEventListener("click", function(){
        
        /*simply close the pop-up */
        popupOverlay.style.display = "none";
    }); 
});

function createYesNoPopup(){

    const delPopupContent = document.createElement("div");
    delPopupContent.classList.add("popup-content");

    /* Add a question and two buttons yes / no */

    const question = "hey, are you sure you want to delete all tasks?";

    const questionLabel = document.createElement("label");
    questionLabel.textContent = question;
    questionLabel.id = "question-label";

    /*create yes no buttons*/
    // created above
    YdeleteAll.textContent = "Yes";
    NdeleteAll.textContent = "Nope!";
    YdeleteAll.classList.add("button-container");
    NdeleteAll.classList.add("button-container");

    delPopupContent.appendChild(questionLabel);
    delPopupContent.appendChild(YdeleteAll);
    delPopupContent.appendChild(NdeleteAll);

    return delPopupContent;
}


