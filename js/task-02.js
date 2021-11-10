const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.querySelector('#ingredients');

const newArray = ingredients.map(ingredient => {
  const ingredientsList = document.createElement('li');
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add("item");
  return ingredientsList;
 });

ingredientsId.append(...newArray);


