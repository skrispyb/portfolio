// ****************************************************************************
// To make hamburger menu show and hide on click on hamburger
// ****************************************************************************

let hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', () => {
    
    document.getElementById('menu').classList.toggle("show_menu");
});


// ****************************************************************************
// Function to redirect cursor focus to the email input for
// newsletter subcription at the footer
//*****************************************************************************

function scrollToSub() {
    let sub = document.getElementById("sub");
    sub.scrollIntoView();
    sub.focus();
}