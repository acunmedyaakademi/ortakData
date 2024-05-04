const BASE_URL = "https://dummyjson.com/recipes/"

async function fetchProduct(){
    const recipes = await fetch(`${BASE_URL}`)
    const json = await recipes.json()
    return json
}

async function recipesProduct(){
    const recipiesSelect = await fetchProduct()
    const product = recipiesSelect.recipes

    console.log(product);
}


recipesProduct();