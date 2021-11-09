const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const ingredientsList = document.createElement('li');
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add("item");
  ingredientsId.append(ingredientsList);
};







