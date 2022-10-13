function getRecipes() {
    return [{
      name: "salmon soup",
      vegan: false,
      ingredients: [{
          name: "salmon",
          quantity: 1,
        }, {
          name: "cream",
          quantity: 2,
        }, {
          name: "milk",
          quantity: 1,
        }
      ]
    }, {
      name: "carbonara",
      vegan: false,
      ingredients: [{
          name: "pasta",
          quantity: 1,
        }, {
          name: "cheese",
          quantity: 5,
        }, {
          name: "milk",
          quantity: 1,
        }
      ]
    }, {
      name: "rice bowl",
      vegan: false,
      ingredients: [{
          name: "rice",
          quantity: 2,
        }, {
          name: "water",
          quantity: 1,
        }
      ]
    }];
  }
  
  // Implement functions that perform the following tasks
  
  // Task: 1. Add a new recipe
  //const addRecipe = (recipes, recipe) => {
    // check if recipe has name and vegan status
    // add recipe to recipes
    // return recipes array
  
  const recipes =getRecipes();
  const recipe =[{
    name: "vegi combo",
    vegan: true,
    ingredients: [{
        name: "vegi",
        quantity: 1,
      }]}]
 function addRecipe(recipes,recipe)  {
    if( (recipes.every(values=>( values.age !== null)) && 
    recipes.every(values=>( values.name !== null)))==true){
        recipes.push(recipe)
        console.log(recipes)
    }
    else
    console.log('it is not vegan')
  }
  addRecipe();
  
  // Task: 2. delete a recipe that matches a given name
//const deleteRecipe = (recipes, recipeName) => {
  // ....
  //return updatedList;
//}

function deleteRecipe (recipes,recipeName){
const index =recipes.findIndex(values=>values.name==recipeName)
recipes.splice(index,1)
  console.log(recipes)
}
deleteRecipe(recipes,carbonara)

// Task: 3. get only vegan recipes*/
const filtered1 = recipes.filter (values=>values.vegan==true)
console.log(filtered1)
// Task: 4. get the names of the ingredients of a recipe
function getingredient(recipes, name)  {
  const index =recipes.findIndex(values=>values.name==name)
   
   console.log( recipes[index].ingredients )
}

// Task: 5. add a recipe to favorites
//const addToFavorites = (favorites, recipe) => {
  // .....
 // return favorites;
//}

//console.log(recipes)
 const meatball ={
  name: "meat",
  vegan: false,
  ingredients: [{
      name: "meat",
      quantity: 2,
    }, {
      name: "water",
      quantity: 1,
    }
  ]}
  function addfavorite (recipe,favorites){
        recipe.push(favorites)
    console.log(recipe)
  }
  
  // Task: 6. remove a recipe from favorites
const removeFavorite = (recipe, recipeName) => {
const index =recipe.findIndex(values=>values.name==recipeName)
 recipe.splice(index,1)
 return recipe

}
//removeFavorite(recipe,meatball)
// Task: 7. get the list of names of the items in favorites
const favorites1 =recipe.map(values=> values=values.name)
// Task: 8. edit a recipe - change the name
const editRecipe = (recipes, oldName, newName) => {
  // find the recipe by oldName
  // change the name to newName
  // this can be done by map
  // map each recipe to itself. If the name matches, map it to a new object with newName
  const indexv =recipes.findIndex(values=>values.name==oldName)
  recipes[indexv].name=newName
   return recipes
}
// Task: 9. edit a recipe - make it vegan / make it non-vegan
const toggleVeganStatus = (recipes, recipeName) => {
  const index =recipes.findIndex(values=>values.name==recipeName)
  if (recipes[index].vegan==true){
    recipes[index].vegan=false
  } else recipes[index].vegan= true;
   return recipes

}
// Task: 10. get one recipe by name - return the recipe that matches the exact name of the recipe
const searchByRecipeName = (recipes, recipeName) => {
  // use filter
    return recipes.filter(values => values.name.match(recipeName))
}
// Task: 11. search by ingredient name - return all recipes that contain a given ingredient name
const searchByIngredientName = (recipes, ingredientName) => {
  // use filter and again filter through the ingredients
  const filtered =recipes.filter(values=>values.ingredients)
  return filtered.filter(values=>values.ingredientName)
}
// Task: 12. add an ingredient to a recipe
const addIngredient = (recipes, recipeName, ingredient) => {
  // add the ingredient to the recipe that matches the recipename
  // return updatedList;
  const index= recipes.findIndex
}
// Task: 13. delete an ingredient from a recipe, 
const deleteIngredient = (recipes, recipeName) => {

  const index =recipes.findIndex(values=>values.name==name)
  arr[index].ingredients =null
  return arr
}
///Task: 14. edit a recipe - change the quantity of an ingredient
const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
    const index = recipes.findIndex(values=>values.name==recipeName)
        if(arr[index].ingredients[index].name==ingredientName){
    arr[index].ingredients.map(values=>values.quantity=newQuantity)
        return recipes }
    
        return 'recipeName is not in the list'
  }
  // Task: 15. Execute the functions you implemented above as required below
const main = () => {
  let recipes = getRecipes();

  let favorites = [];

  // Task: 15.1
  // Add the following recipes to the recipes array using the function from Task-1
  //    Lentil Bolognese, vegan, & Ingredients: 1 lentil; 3 tomatoes; 1 pasta; 1 onion
  //    Ozzo Chicken, non-vegan, & Ingredients: 1 spinach; 1 chicken; 1 sour cream
 

  const lentilBolognese = { name: "Lentil Bolognese",
  vegan: true,
  ingredients: [{
      name: "lentil",
      quantity: 1,
    },{
      name: "tomato",
      quantity: 3,
    },{
      name: "pasta",
      quantity: 1,
    },{
      name: "onion",
      quantity: 1,
    }]} 
  const OzzoChicken = { name: "Ozzo Chicken",
  vegan: false,
  ingredients: [{
      name: "spinach",
      quantity: 1,
    },{
      name: "chicken",
      quantity: 1,
    },{
      name: "sour cream",
      quantity: 1,
    }]};
    // fill in the attributes

  recipes = addRecipe(lentilBolognese,recipes);
  recipes = addRecipe(OzzoChicken,recipes);

  console.log(recipes)} // add ozzo chicken in a similar way
  function addRecipe(obj,recipes){
      recipes.push(obj)
      return recipes
  }
   // Task: 15.2
  // Delete the recipe named "carbonara" using the function from Task-2
  let Recipes = getRecipes();
  const Index =Recipes.findIndex(value =>value.name=='carbonara')
  delete Recipes[Index]

 // Task: 15.3
  // Add ingredient "garlic with quantity: 3" to the recipe "salmon soup"
  // Add ingredient "lentil with quantity: 1" to the recipe "rice bowl"
  const Index1 =recipes.findIndex(value =>value.name=='salmon soup')
  recipes[Index].ingredients.push({
    name: "garlic",
    quantity: 3,
  });
  const Index2 =recipes.findIndex(value =>value.name=='rice bowl')
  recipes[Index2].ingredients.push({
    name: "rice bowl",
    quantity: 1,
  });
  // Task: 15.4
  // Delete ingredient named "water" from the recipe "rice bowl"

  delete recipes[Index2].ingredients[1]
  // Task: 15.5
  // Get the recipe by the name "Ozzo Chicken" and Add it to favorites
  // Get the recipe by the name "salmon soup" and Add it to favorites
  // Get the recipe by the name "Lentil Bolognese" and Add it to favorites
  const favorites =[];
  const addToFavorites=(recipename)=>{
  const index4 =recipes.findIndex(values =>values.name==recipename)
  favorites.push(recipes[index4])
  console.log(favorites)}
  favorites = addToFavorites(lentilBolognese);
  // Task: 15.6
  // Delete the recipe "Lentil Bolognese" from the favorites
  const index5 =favorites.findIndex(values =>values.name='Lentil Bolognese')
  delete favorites[index5]
  // Task: 15.7
  // Change the name of the recipe "rice bowl" to "Japanese Rice Bowl"
  const index6 =recipes.findIndex(values =>values.name='rice bowl')
  recipes[index6].name='Japanese Rice Bowl'
  // Task: 15.8
  // change "rice bowl" to be vegan
  toggleVeganStatus(recipes, "rice bowl")
  // Task: 15.9
  // change the quantity of the Ingredient lentil to be 2, in  Lentil Bolognese
  const index8 =recipes.findIndex(values =>values.name=='Lentil Bolognese')
  const filtered4 =recipes[index8].ingredients
  const index9 = filtered4.findIndex(values=>values.name=='lentil')
  recipes[index8].ingredients[index9].quantity=2
  // Task: 15.10
  // call the function you implemented on task-5 to get the list of ingredients of "salmon soup"
  // console.log these Ingredients
  // TEST 1: it should print these ingredients: salmon, cream, milk, garlic
  favorites = addToFavorites('salmon soup');
  console.log(favorites[1].ingredients)
  // Task: 15.11
  // console.log all the vegan recipes
  // TEST 2: It should print the recipe Japanese Rice Bowl
  const filtered = recipes.filter(values=>values.vegan==true)
  console.log(filtered)
// Task: 15.12
  // console.log all the recipes that contain the ingredient "lentil"
  // TEST 3: It should print the recipes Japanese Rice Bowl and Lentil Bolognese

  // Task: 15.12
  // console.log the favorites array
  // TEST 4: It should print the recipes "salmon soup" & "Ozzo Chicken"
  console.log(favorites)
  // Task: 15.13
  // console.log the recipes array
  // TEST 5: It should print an array of 4 recipes that matches expectedRecipesArray defined below
 console.log(recipes)
 
 main();
  
