const products = [
  {
    title: "Electronics",
    description: "Laptops, smartphones, headphones and more.",
    image:
      "images/electronics.jpg",
  },
  {
    title: "Fashion",
    description: "Trending styles for men and women.",
    image:
      "images/fashion.jpg",
  },
  {
    title: "Home Essentials",
    description: "Furniture, decor and kitchen products.",
    image:
      "images/home.jpg",
  },
  {
    title: "Beauty",
    description: "Makeup, skincare and wellness products.",
    image:
      "images/beauty.jpg",
  },
  {
    title: "Books",
    description: "Bestselling books and educational resources.",
    image:
      "images/books.jpg",
  },
  {
    title: "Sports",
    description: "Fitness equipment and sports accessories.",
    image:
      "images/sports.jpg",
  },
];

const container = document.getElementById("productContainer");

products.forEach((product) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-lg-4";

  col.innerHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h5>${product.title}</h5>
        <p>${product.description}</p>
        <button class="btn btn-warning w-100 add-to-cart">Shop Now</button>
      </div>
    </div>
  `;

  container.appendChild(col);
});

// Cart Counter
let cartCount = 0;

setTimeout(() => {
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      document.querySelector(".cart-count").textContent = cartCount;
    });
  });
}, 100);
