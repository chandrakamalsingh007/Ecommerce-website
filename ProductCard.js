const productContainer = document.getElementById('productContainer');
const productTemplate = document.getElementById('productTemplate')

export const showProductContainer = (products) =>{
    if (!products){
        return false;
    }

    products.forEach((curProd) =>{
        const {id,front,back,badge,category,title,newPrice,oldPrice,stock} = curProd;
        console.log(title);

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".product-img-front").src = front;
        productClone.querySelector(".product-img-back").src = back;
        productClone.querySelector(".product-badge").textContent = badge;
        productClone.querySelector(".product-badge").id = id;
        productClone.querySelector(".product-category").textContent = category;
        productClone.querySelector(".product-title").textContent = title;
        productClone.querySelector(".new-price").textContent = `Rs.${newPrice}`;
        productClone.querySelector(".old-price").textContent = `Rs.${oldPrice}`;
        productClone.querySelector(".total-stock").textContent = stock;

        productContainer.append(productClone);
    });
}