const categories = document.querySelector('.categories');
const products = document.querySelector('.products');

function getAllCategories(productsList) {
    const mySet = new Set();

    productsList.forEach(element => {
        mySet.add(element.brand.toLowerCase());
    });

    mySet.forEach((element) => {
        categories.innerHTML += `
        <div class="card">
            <div class="categorieImage">
                <img src="https://logo.clearbit.com/${element}.com" alt="category image not found">
            </div>
            <p>${element}</p>
        </div>
        `;
    });

    categories.innerHTML += `
        <div class="card">
            <div class="categorieImage">+</div>
            <p>add categorie</p>
        </div>
    `;
}

function getAllProducts(productsList) {
    products.innerHTML = ""; // Avvalgi mahsulotlarni tozalash
    productsList.forEach((element) => {
        const productCard = document.createElement("div");
        productCard.classList.add("productCard");
        productCard.innerHTML = `
            <img src="${element.images[0]}" alt="not found image">
            <div class="productTitle">
                <div>${element.title}</div>
                <div class="productLike"><img src="./logos/notlike.avif" alt="not found image"></div>
            </div>
            <p>Rating: ${element.rating}</p>
            <p>Price: ${element.price}</p>
        `;
        
        productCard.addEventListener("click", function () {
            showProductDetails(element);
        });

        products.appendChild(productCard);
    });
}

function showProductDetails(product) {
    categories.innerHTML = ` 
        <div class="productPage">
            <h2>${product.title}</h2>
            <p class="productPrice">${product.price} UZS</p>
            <div class="productImages">
                <img src="${product.images[0]}" alt="not found image" class="mainImage">
                <div class="imageGallery">
                    ${product.images.map(img => `<img src="${img}" class="smallImage" onclick="changeMainImage('${img}')">`).join("")}
                </div>
            </div>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Rating:</strong> ${product.rating}</p>
            <p><strong>Stock:</strong> ${product.stock} left</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <button id="backButton">Back</button>
        </div>
    `;

    document.getElementById("backButton").addEventListener("click", function () {
        location.reload(); // Sahifani qayta yuklash
    });
}

// Katta rasmni almashtirish uchun funksiya
function changeMainImage(newSrc) {
    document.querySelector(".mainImage").src = newSrc;
}

fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((result) => {
        getAllCategories(result.products);
        getAllProducts(result.products);
    });
