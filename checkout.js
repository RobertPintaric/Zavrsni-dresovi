// checkout.js

document.addEventListener("DOMContentLoaded", () => {
    const checkoutSummary = document.getElementById("checkoutSummary");
    const checkoutForm = document.getElementById("checkoutForm");
    const successMessage = document.getElementById("successMessage");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;

    if (!loggedIn) {
        alert("Morate se prijaviti prije završetka kupnje.");
        window.location.href = "login.html";
        return;
    }

    if (!cart.length) {
        checkoutSummary.innerHTML = "<p>Košarica je prazna.</p>";
        checkoutForm.style.display = "none";
        return;
    }

    let total = 0;
    let summaryHtml = "<h3>Pregled narudžbe</h3>";

    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        summaryHtml += `
            <p>
                ${item.name} |
                veličina: ${item.size} |
                količina: ${item.quantity || 1} |
                ukupno: ${itemTotal} €
            </p>
        `;
    });

    summaryHtml += `<p><strong>Ukupno za platiti: ${total} €</strong></p>`;
    checkoutSummary.innerHTML = summaryHtml;

    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const card = document.getElementById("card").value.trim();

        if (!fullName || !address || !city || !card) {
            alert("Molimo ispunite sva polja.");
            return;
        }

        localStorage.removeItem("cart");
        checkoutForm.style.display = "none";
        checkoutSummary.style.display = "none";
        successMessage.style.display = "block";
    });
});