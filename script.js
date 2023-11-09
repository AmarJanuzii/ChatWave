function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email] && users[email] === password) {

        let profileRedirect = document.getElementById("profile_redirect");
       var card = document.querySelector('.card');
       card.addEventListener( 'click', function() {
         card.classList.toggle('is-flipped');
        setTimeout(() => {
             profileRedirect.click();
        }, 300);

       });
     
    } else {
        alert("Invalid credentials or user does not exist!");
    }
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
        alert("User already exists!");
           
    } else {
        users[email] = password;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful!");
    }
}
function closeForm() {
    $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function() {
    /* Contact Form Interactions */
    $('#btnOpenForm').on('click', function(event) {
        event.preventDefault();
        $('.form-popup-bg').addClass('is-visible');
    });

    // Close popup when clicking x or off popup
    $('.form-popup-bg').on('click', function(event) {
        if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
            event.preventDefault();
            closeForm(); // Call the closeForm function
        }
    });
});