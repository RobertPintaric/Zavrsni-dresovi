// proizvod.js

document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {
            id: 1,
            name: "Barcelona domaći dres 25/26 - Lamine Yamal",
            price: 120,
            image: "https://thumblr.uniid.it/product/417866/1fcc3b114f96.jpg?width=3840&format=webp&q=75"
        },
        {
            id: 2,
            name: "Bayern Munchen domaći dres 25/26 - Michael Olise",
            price: 120,
            image: "https://sportiger.de/cdn/shop/files/fcb-fc-bayern-munchen-trikot-home-kinder-25-26-olise-17-5632999.png?v=1751688433"
        },
        {
            id: 3,
            name: "Psg domaći dres 25/26 - Desire Doue",
            price: 120,
            image: "https://images.footballfanatics.com/paris-saint-germain/psg-nike-home-stadium-shirt-2025-26-kids-with-d-dou%C3%A9-14-printing_ss5_p-203060762+u-qavnmzboisnqulqjrwcz+v-nekswgundyyeth83frar.jpg?_hv=2"
        },
        {
            id: 4,
            name: "Chelsea domaći dres 25/26 - Cole Palmer",
            price: 120,
            image: "https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26-with-palmer-10-printing_ss5_p-203072419+u-lza7cbhhtqfdb8iaxfiy+v-yr0da8rf06jnxgil8pds.jpg?_hv=2"
        },
        {
            id: 5,
            name: "Inter Miami domaći dres 25/26 - Lionel Messi",
            price: 130,
            image: "https://aztecasoccer.com/cdn/shop/files/adidas-mens-inter-miami-2025-26-home-jersey-w-messi-10-printing-both.jpg?v=1740084090&width=1406"
        },
        {
            id: 6,
            name: "Manchester City domaći dres 25/26 - Erling Haaland",
            price: 130,
            image: "https://feeds.frgimages.com/ss4/https://feeds.frgimages.com/ss4/altimages/ss4/p-14412118_u-4zu9w33sqcsl3tgtlyo2_v-52baeda9ffce47d38b18b1eccf4acab5.jpg?_hv=3"
        },
        {
            id: 7,
            name: "Arsenal domaći dres 25/26 - Bukayo Saka",
            price: 120,
            image: "https://images.footballfanatics.com/arsenal/arsenal-adidas-home-shirt-2025-26-with-saka-7-printing_ss5_p-203122256+u-i4bkflkp0lcd2uyqmscu+v-hvzaz6qtue1cuvj6rjse.jpg?_hv=2"
        },
        {
            id: 8,
            name: "AC Milan domaći dres 25/26 - Luka Modrić",
            price: 130,
            image: "https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/3/f/3ff442b564befd50daa41f470d692d17ff4a428b383ca2464094bbc713d8366c.jpeg"
        },
        {
            id: 9,
            name: "Real Madrid domaći dres 25/26 - Kylian Mbappe",
            price: 140,
            image: "https://images.footballfanatics.com/real-madrid/real-madrid-adidas-home-shirt-2025-26-with-mbapp%C3%A9-10-printing_ss5_p-203154550+u-r1hliow1ecuug0exbtwy+v-dhnjudj7fgdeho5bwfos.jpg?_hv=2&w=532"
        },
        {
            id: 10,
            name: "Liverpool domaći dres 25/26 - Mohamed Salah",
            price: 130,
            image: "https://images.footballfanatics.com/liverpool/liverpool-adidas-home-shirt-2025-26-kids-with-msalah-11-printing_ss5_p-203142534+u-i1shvzkkiawap6bhfqkf+v-wz0mvtedhsflgltxlnzf.jpg?_hv=2"
        }
    ];

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    if (!id) {
        console.error("ID nije pronađen u URL-u.");
        return;
    }

    const product = products.find(p => p.id === id);

    if (!product) {
        console.error("Proizvod s tim ID-om ne postoji.");
        return;
    }

    const productImage = document.getElementById("productImage");
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");

    productImage.src = product.image;
    productImage.alt = product.name;
    productName.textContent = product.name;
    productPrice.textContent = `Cijena: ${product.price} €`;

    const sizeSelect = document.getElementById("size");
    const addBtn = document.getElementById("addBtn");

    sizeSelect.addEventListener("change", () => {
        if (sizeSelect.value !== "") {
            addBtn.disabled = false;
            addBtn.classList.add("active");
        } else {
            addBtn.disabled = true;
            addBtn.classList.remove("active");
        }
    });

    addBtn.addEventListener("click", () => {
        const selectedSize = sizeSelect.value;

        if (!selectedSize) {
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(item =>
            item.id === product.id && item.size === selectedSize
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                size: selectedSize,
                image: product.image,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "kosarica.html";
    });

});