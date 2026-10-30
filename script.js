// ===== Leaf & Brew Tea House - JavaScript =====

// Home page: show a welcome discount code
function showWelcome() {
    var name = prompt("Welcome to Leaf & Brew! What is your name?");
    var box = document.getElementById("welcome-message");
    if (name) {
        box.textContent = "Hi " + name + "! Use code LEAF10 to get 10% off your first order.";
    } else {
        box.textContent = "Use code LEAF10 to get 10% off your first order.";
    }
}

// Home page: show a random tea tip
var teaTips = [
    "Green tea tastes best with water at about 80°C, not boiling.",
    "Steep black tea for 3 to 5 minutes for a strong, smooth cup.",
    "Store your tea in an airtight tin away from light and moisture.",
    "Add a slice of fresh ginger to masala chai for extra warmth.",
    "Herbal teas can steep longer, up to 7 minutes, without turning bitter."
];

function showTeaTip() {
    var index = Math.floor(Math.random() * teaTips.length);
    document.getElementById("tea-tip").textContent = "Tip: " + teaTips[index];
}

// Products page: simple shopping cart
var cartCount = 0;
var cartTotal = 0;

function addToCart(productName, price) {
    cartCount = cartCount + 1;
    cartTotal = cartTotal + price;
    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = cartTotal;
    alert(productName + " has been added to your cart!");
}

function clearCart() {
    cartCount = 0;
    cartTotal = 0;
    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = cartTotal;
}

// Contact page: check the form and show a thank-you message
function sendMessage() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var status = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        status.style.color = "#b23a3a";
        status.textContent = "Please fill in your name, email and message.";
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        status.style.color = "#b23a3a";
        status.textContent = "Please enter a valid email address.";
        return;
    }

    status.style.color = "#2f6b45";
    status.textContent = "Thank you, " + name + "! Your message has been sent. We will reply within 24 hours.";
    document.getElementById("contact-form").reset();
}
