import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.getElementById('productContainer');
const productTemplate = document.getElementById('productTemplate')

export const showProductContainer = (products) =>{
    if (!products || products.length ===0){
        return false;
    }

    //to show only 8 products
    const shuffledProducts = products.sort(()=> Math.random() -0.5)

    // only 8 random products to show
    const randomProducts = shuffledProducts.slice(0,8);

    randomProducts.forEach((curProd) =>{
        const {id,color,front,back,badge,category,title,newPrice,oldPrice,stock} = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#productValue").setAttribute("id", `product${id}`);
        productClone.querySelector(".product-img-front").src = front;
        productClone.querySelector(".product-img-back").src = back;
        productClone.querySelector(".product-badge").textContent = badge;
        productClone.querySelector(".product-badge").id = color;
        productClone.querySelector(".product-category").textContent = category;
        productClone.querySelector(".product-title").textContent = title;
        productClone.querySelector(".new-price").textContent = `Rs.${newPrice}`;
        productClone.querySelector(".old-price").textContent = `Rs.${oldPrice}`;
        productClone.querySelector(".total-stock").textContent = stock;

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            homeQuantityToggle(event,id,stock)
        });

        productContainer.append(productClone);
    });
}