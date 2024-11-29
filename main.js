import './style.css'

import categories from "./src/api/category.json"
import { showCategoryContainer } from './CategoryCards';

console.log(categories);

showCategoryContainer(categories);

