// Selcet the delete buttons
let btns = document.querySelectorAll("#destroy");

// Declare a variable to store the decision
let decision; 

// Add an event to confirm whether to delete the chat or not
for (let btn of btns)
{
    btn.addEventListener("click", (event) => {
        decision = confirm("Do you want to delete this chat?");
        if(decision!=true)
        {
            event.preventDefault(); //Prevents the form from being submitted thus stopping the chat deletion
        }
    });
}