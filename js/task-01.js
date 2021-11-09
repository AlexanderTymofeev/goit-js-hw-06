const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
const categoriesArray = [...categories]
    .map(category => console.log(`Category: ${category.children[0].textContent} 
Elements: ${category.children[1].children.length}`));