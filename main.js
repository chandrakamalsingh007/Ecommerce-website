import './style.css'

import categories from "./src/api/category.json"
import { showCategoryContainer } from './CategoryCards';
import products from "./src/api/products.json";
import { showProductContainer } from './ProductCard';

showCategoryContainer(categories);


document.addEventListener('DOMContentLoaded',()=>{
    showProductContainer(products);
})

