document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault();
    // Form processing logic
});

const validateForm = () => {
    const firstnameNode = document.querySelector("#firstname");
    let isValid = true;
    let errorMessages = [];

    // check length of the entry
    let inputFirstname = firstnameNode.value;
    
    // if firstname is empty
    if(inputFirstname.length <= 0) {
        // not valid -- add new message to error message array
        isValid = false;
        errorMessages.push("Username cannot be empty.");
    }
    return {
        isValid: isValid, 
        errorMessages: errorMessages
    };
};

const displayErrorMessage = (displayNode, errorMessage) => {
    // create span element for error message
    const errorTextNode = document.createElement("div");
    // give tag 'role="alert"' for screen readers
    errorTextNode.setAttribute("role", "alert");
    errorTextNode.innerText = errorMessage;
    // provide class name for styling and clearing errors out when resubmitting
    errorTextNode.className = "error-message";

    // append new text to display node
    displayNode.appendChild(errorTextNode);
}