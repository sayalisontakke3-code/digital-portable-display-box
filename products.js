const products = JSON.parse(localStorage.getItem("products")) || [];
const productList = document.getElementById("productList");

if (products.length === 0) {
  productList.innerHTML = "<p>No products uploaded yet.</p>";
}

products.forEach(product => {
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "15px";
  card.style.width = "250px";

  card.innerHTML = `
    <img src="${product.image}" style="width:100%; height:150px; object-fit:cover">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <p>Discount: ${product.discount}%</p>
    <p>${product.description}</p>
    <p>Bought by ${product.customers} customers</p>
    <a href="${product.buyLink}" target="_blank">Buy Now</a>
  `;

  productList.appendChild(card);
});
