let cart = [];


// =========================
// ADD TO CART
// =========================

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingProduct = cart.find(function(item) {
            return item.name === name;
        });

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }

        updateCart();

        alert("Product added to cart!");

    });

});


// =========================
// UPDATE CART
// =========================

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartCount.textContent = "0";
        cartTotal.textContent = "0";

        return;
    }


    let total = 0;
    let totalItems = 0;


    cart.forEach(function(item, index) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;
        totalItems += item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>
                    $${item.price} × ${item.quantity}
                </p>
            </div>

            <div>
                <strong>
                    $${itemTotal}
                </strong>

                <button
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>
            </div>
        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent =
        totalItems;

    cartTotal.textContent =
        total;
}


// =========================
// REMOVE FROM CART
// =========================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// =========================
// CHECKOUT
// =========================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "Thank you for shopping with UrbanThread!"
    );

}


// =========================
// CATEGORY FILTER
// =========================

const categoryFilter =
    document.getElementById("categoryFilter");


categoryFilter.addEventListener(
    "change",
    function() {

        const selectedCategory =
            categoryFilter.value;

        const products =
            document.querySelectorAll(".product-card");


        products.forEach(function(product) {

            const productCategory =
                product.dataset.category;


            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    }
);


// =========================
// PRICE SORTING
// =========================

const priceSort =
    document.getElementById("priceSort");


priceSort.addEventListener(
    "change",
    function() {

        const productContainer =
            document.querySelector(
                ".product-container"
            );


        const products =
            Array.from(
                document.querySelectorAll(
                    ".product-card"
                )
            );


        if (priceSort.value === "low") {

            products.sort(function(a, b) {

                return (
                    Number(a.dataset.price) -
                    Number(b.dataset.price)
                );

            });

        }


        else if (priceSort.value === "high") {

            products.sort(function(a, b) {

                return (
                    Number(b.dataset.price) -
                    Number(a.dataset.price)
                );

            });

        }


        products.forEach(function(product) {

            productContainer.appendChild(product);

        });

    }
);


// =========================
// PRODUCT DETAILS
// =========================

function showDetails(
    name,
    price,
    description
) {

    document.getElementById(
        "detail-name"
    ).textContent = name;


    document.getElementById(
        "detail-price"
    ).textContent = price;


    document.getElementById(
        "detail-description"
    ).textContent = description;


    document.getElementById(
        "product-details"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// SHOP NOW BUTTON
// =========================

function scrollToProducts() {

    document.getElementById(
        "products"
    ).scrollIntoView({
        behavior: "smooth"
    });

}