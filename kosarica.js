// kosarica.js

const cartContent = document.getElementById("cartContent");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart || cart.length === 0) {
        cartContent.innerHTML = "<p>Košarica je prazna.</p>";
        clearCartBtn.style.display = "none";
        checkoutBtn.style.display = "none";
        return;
    }

    clearCartBtn.style.display = "inline-block";
    checkoutBtn.style.display = "inline-block";

    cartContent.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Veličina: ${item.size}</p>
                <p>Količina: ${item.quantity || 1}</p>
                <p>Cijena po komadu: ${item.price} €</p>
                <p>Ukupno za proizvod: ${itemTotal} €</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-btn" data-index="${index}">Ukloni</button>
            </div>
        `;
        cartContent.appendChild(div);
    });

    const totalDiv = document.createElement("div");
    totalDiv.className = "cart-total";
    totalDiv.textContent = `Ukupno: ${total} €`;
    cartContent.appendChild(totalDiv);

    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const itemIndex = parseInt(btn.getAttribute("data-index"), 10);
            removeItem(itemIndex);
        });
    });
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();

clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCart();
});