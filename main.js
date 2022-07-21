// when user selects a dish open and then
// clicks the "lets eat" button, the user
// should see a random dish from that cat

// when the dish name appears,
// the cookpot icon disappears (.hidden)

// Query Selectors and Arrays here
var sideButton = document.querySelector("#side-dish");
var mainButton = document.querySelector("#main-dish");
var dessertButton = document.querySelector("#dessert-dish");
var letsCookButton = document.querySelector("#lets-cook-button");

var cookpotImage = document.querySelector(".cookpot-image");

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

function showRecipe() {
  // show a randomly selected recipe from the given array
  // hide the cookpit icon
}

// do I need multiples of this function for each separate
// radio button/dish??
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
