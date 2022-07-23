// Query Selectors and Arrays here
var sideButton = document.querySelector("#side-dish");
var mainButton = document.querySelector("#main-dish");
var dessertButton = document.querySelector("#dessert-dish");
var letsCookButton = document.querySelector("#lets-cook-button");

var cookpotImage = document.querySelector(".cookpot-image");
var recipeBox = document.querySelector(".recipe");
var recipeText = document.querySelector(".recipe-text");

var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];
var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

var shownRecipes = [];
var currentRecipe;

// Functions here
// Iteration 1: Display Chosen Recipe
letsCookButton.addEventListener("click", showRecipe)

function getRandomRecipe(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]
}

function hideShowImage(show, hide) {
  show.classList.remove("hidden");
  hide.classList.add("hidden");
}

function generateRandomRecipe() {
  var newRecipe = "";
  if (sideButton.checked) {
    newRecipe = getRandomRecipe(sides);
  } else if (mainButton.checked) {
    newRecipe = getRandomRecipe(mains);
  } else if (dessertButton.checked) {
    newRecipe = getRandomRecipe(desserts);
  }
  recipeText.innerText = newRecipe;
}

function showRecipe() {
  hideShowImage(recipeBox, cookpotImage);
  generateRandomRecipe()
}
