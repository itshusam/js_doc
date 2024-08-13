let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


function displayProducts() {
   
    const productList = document.getElementById('product-list');

    
    products.forEach(product => {
       
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

       
        let productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

       
        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

      
        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

      
        productList.appendChild(productDiv);
    });
}


window.addEventListener('load', displayProducts);