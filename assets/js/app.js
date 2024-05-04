const datarecipiesCont = document.querySelector(".data-recipes")
const exploregrid = document.querySelector(".explore-grids")
const recipiesemail = document.querySelector(".recpipesemail-grids")

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
            <div class="explore-box">
                <img src="${exploreProduct.image}">
                <div class="explore-textcont">
                    <h3 class="explore-subtitle">${exploreProduct.name}</h3>
                    <p class="explore-desc">${exploreProduct.instructions[0]}</p>
                    <p class="explore-rating">Rating ${exploreProduct.rating}</p>
                </div>
            </div>
        `
    }
    
}

function emailfnc(){
    recipiesemail.innerHTML += `
    <h1 class="emailhead">Lets Stay Touch</h1>
    <h3 class="emailtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ducimus vitae. Doloremque, hic eum maxime aliquam recusandae a sequi debitis accusamus porro nemo eos quaerat laboriosam, quidem natus, ab repudiandae fugiat sit ipsa non labore! Quam inventore saepe possimus nisi.</h3>
    
    `
}

function init(){
    productRecipes();
    emailfnc();
}

init();