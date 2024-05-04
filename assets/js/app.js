let limit=0
const BASE_URL = `https://dummyjson.com/recipes?limit=${limit}`
const datarecipiesCont = document.querySelector(".data-recipes")
async function fetchProduct(){
    const recipes = await fetch(`${BASE_URL}`)
    const json = await recipes.json()
    return json
}

async function recipesProduct(){
    const recipiesSelect = await fetchProduct()
    const product = recipiesSelect.recipes

    return product
}

async function productRecipes(){
    console.log(await recipesProduct());
}

logor();