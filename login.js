// login.js

function updateHeaderLogin() {
    const loginLink = document.getElementById("login-link");
    if (!loginLink) return;

    const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;
    const customerName = localStorage.getItem("customerName") || "";

    if (loggedIn && customerName) {
        loginLink.textContent = customerName;
    } else {
        loginLink.textContent = "👤";
    }
}

function updateHomeGreeting() {
    const greeting = document.getElementById("customerGreeting");
    if (!greeting) return;

    const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;
    const customerName = localStorage.getItem("customerName") || "";

    if (loggedIn && customerName) {
        greeting.style.display = "block";
        greeting.textContent = `Dobrodošli, ${customerName}!`;
    } else {
        greeting.style.display = "none";
        greeting.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateHeaderLogin();
    updateHomeGreeting();

    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginBtn) {
        const customerNameInput = document.getElementById("customerName");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const loginForm = document.getElementById("loginForm");
        const loggedInInfo = document.getElementById("loggedInInfo");
        const welcomeText = document.getElementById("welcomeText");

        const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;
        const customerName = localStorage.getItem("customerName") || "";

        if (loggedIn && customerName) {
            loginForm.style.display = "none";
            loggedInInfo.style.display = "block";
            welcomeText.textContent = `Prijavljeni ste kao ${customerName}.`;
        }

        loginBtn.addEventListener("click", () => {
            const customerName = customerNameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (customerName === "" || email === "" || password === "") {
                alert("Unesite ime kupca, e-mail i lozinku.");
                return;
            }

            localStorage.setItem("loggedIn", true);
            localStorage.setItem("customerName", customerName);
            localStorage.setItem("username", customerName);

            loginForm.style.display = "none";
            loggedInInfo.style.display = "block";
            welcomeText.textContent = `Prijavljeni ste kao ${customerName}.`;

            updateHeaderLogin();
            updateHomeGreeting();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("username");
            localStorage.removeItem("customerName");
            window.location.reload();
        });
    }
});