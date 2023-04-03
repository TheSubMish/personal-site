//Log-In Validation
function logvalid() {
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((user == '' || user == null) && (password == '' || password == null)) {
        alert('Both field are required');
        return false;
    }
    if (user == '' || user == null) {
        alert('Username field is required');
        return false;
    }
    if (password == "" || password == null) {
        alert('Password field is required');
        return false;
    }
    if (username == password) {
        alert('Both fields cannot be same');
        return false;
    }
}

// Sign-Up validation
function signUpValid() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const npassword = document.getElementById("npassword").value;
    const cpassword = document.getElementById("cpassword").value;

    console.log(fname);

    if ((fname == "" || fname == null) && (lname == "" || lname == null) && (username == "" || username == null) && (email == "" || email == null) && (npassword == "" || npassword == null) && (cpassword == "" || cpassword == null)) {
        alert('All Fields Are Required');
        return false;
    }
    if (fname == "" || fname == null) {
        alert('First Name Field is required');
        return false;
    }
    if (lname == "" || lname == null) {
        alert('Last Name Field is required');
        return false;
    }
    if (username == "" || username == null) {
        alert('Username Field is required');
        return false;
    }
    if (email == "" || email == null) {
        alert('Last Name Field is required');
        return false;
    }
    if (npassword == "" || npassword == null) {
        alert('Password Field is required');
        return false;
    }
    if (cpassword == "" || cpassword == null) {
        alert('Confirm Password Field is required');
        return false;
    }
    if (npassword != cpassword) {
        alert('Password Does Not Match');
        return false;
    }
}

//Contact Validation
function conValid() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('mail').value;
    var msg = document.getElementById('msg').value;

    if (firstName == '') {
        alert('First name field is required');
        return false;
    }

    if (lastName == '') {
        alert('Last name field is required');
        return false;
    }

    if (email == '') {
        alert('Email field is required');
        return false;
    }

    if (msg == '') {
        alert('Message field is required');
        return false;
    }
}

// Menu Bar
const menuItems = document.getElementById('menu-items');

function menu() {
    if (menuItems.style.display == "none") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "none";
    }
}

function hide() {
    if (menuItems.style.display == "block") {
        menuItems.style.display = "none";
    }
}

// Change navbar on scroll
function changeColor() {
    // var scrollValue = window.scrollY;
    var scroll = window.scrollY;
    if (scroll <= 650) {
        document.getElementById('nav-home').style.color = '#b8b6b2';
        document.getElementById('nav-about').style.color = 'black';
        document.getElementById('nav-project').style.color = 'black';
        document.getElementById('nav-contact').style.color = 'black';
    } else if (scroll >= 650 && scroll <= 1300) {
        document.getElementById('nav-home').style.color = 'black';
        document.getElementById('nav-about').style.color = '#b8b6b2';
        document.getElementById('nav-project').style.color = 'black';
        document.getElementById('nav-contact').style.color = 'black';
    } else if (scroll > 1300 && scroll <= 1600) {
        document.getElementById('nav-home').style.color = 'black';
        document.getElementById('nav-about').style.color = 'black';
        document.getElementById('nav-project').style.color = '#b8b6b2';
        document.getElementById('nav-contact').style.color = 'black';
    } else {
        document.getElementById('nav-home').style.color = 'black';
        document.getElementById('nav-about').style.color = 'black';
        document.getElementById('nav-project').style.color = 'black';
        document.getElementById('nav-contact').style.color = '#b8b6b2';
    }
    // console.log(scrollValue);
}

window.addEventListener('scroll', changeColor);