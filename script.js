document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let productName = document.getElementById('product-name').value;
    let productPrice = document.getElementById('product-price').value;
    let productImage = document.getElementById('product-image').files[0];

    if (productName && productPrice && productImage) {
        let productList = document.getElementById('product-list');

        let newProduct = document.createElement('div');
        newProduct.innerHTML = `
            <h3>${productName}</h3>
            <p>Price: $${productPrice}</p>
            <img src="${URL.createObjectURL(productImage)}" width="100">
        `;

        productList.appendChild(newProduct);
    }
});