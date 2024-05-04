const BASE_URL = "https://dummyjson.com/recipes/"
const datarecipiesCont = document.querySelector(".data-recipes")
async function fetchProduct(){
    const recipes = await fetch(`${BASE_URL}`)
    const json = await recipes.json()
    return json
}

async function recipesProduct(){
    const recipiesSelect = await fetchProduct()
    const product = recipiesSelect.recipes


    for(const products of product)[
        datarecipiesCont.innerHTML += `
            <div class=""recipies-box>
                <img src="">
                <h2 class="recipies-title">
            </div>
        `
    ]
}


recipesProduct();