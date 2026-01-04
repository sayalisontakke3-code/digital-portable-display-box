const vendor = JSON.parse(localStorage.getItem("vendor")) || {
  name: "ABC Traders",
  shop: "ABC Electronics",
  location: "Phoenix Mall, Mumbai",
  shopNo: "S-21",
  credit: "30 Days",
  performance: "Good"
};

const products = JSON.parse(localStorage.getItem("products")) || [];

document.getElementById("vendorName").innerText = vendor.name;
document.getElementById("shopName").innerText = vendor.shop;
document.getElementById("location").innerText = vendor.location;
document.getElementById("shopNo").innerText = vendor.shopNo;
document.getElementById("creditPeriod").innerText = vendor.credit;
document.getElementById("performance").innerText = vendor.performance;
document.getElementById("productCount").innerText = products.length;
