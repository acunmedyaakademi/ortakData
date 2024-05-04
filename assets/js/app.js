const datarecipiesCont = document.querySelector(".data-recipes")
const exploregrid = document.querySelector(".explore-grids")

async function fetchProduct(limit){
    const BASE_URL = `https://dummyjson.com/recipes?limit=${limit}`
    const recipes = await fetch(BASE_URL)
    const json = await recipes.json()
    return json
}

async function recipesProduct(limit){
    const recipiesSelect = await fetchProduct(limit)
    const product = recipiesSelect.recipes

    return product
}

async function productRecipes(){
    const exploreRecipies = await recipesProduct(6)
    console.log(exploreRecipies);
    for(const exploreProduct of exploreRecipies){
        exploregrid.innerHTML += `
            <div class="">
        `
    }
}

productRecipes();