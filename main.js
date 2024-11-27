import './style.css'

import categories from "./src/api/category.json"
import { showCategoryContainer } from './CategoryCards';

console.log(categories);

showCategoryContainer(categories);

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });