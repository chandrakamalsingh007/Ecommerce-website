// const categoryContainer = document.getElementById('categoryContainer');
// const categoryTemplate = document.getElementById('categoryTemplate');

// export const showCategoryContainer = (categories) =>{
//     if(!categories){
//         return false;
//     }

//   categories.forEach((curCate)=>{

//     const{id,category,image}= curCate;
//     console.log(category);

//     const categoryClone = document.importNode(categoryTemplate.content, true);

//     categoryClone.querySelector(".category-title").textContent = category;
//     categoryClone.querySelector(".category-img").src = image;
//     categoryClone.querySelector(".category-img").alt = `image of ${category}`;
//     categoryContainer.append(categoryClone);
//   });
// };