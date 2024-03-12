const API__URL = "https://fakestoreapi.com/products/";
const productCard = document.querySelector(".product-card");

async function fetchSinglePage(api) {
    let parmas = new URLSearchParams(window.location.search)
    let id = parmas.get("id")

    let data = await fetch(`${api}/${id}`)
    data 
        .json()
        .then(res => singularUser(res))
        .catch(res => console.log("eror",res))
}
fetchSinglePage(API__URL)

function singularUser(product) {
    console.log(product);
    let {image} = product
    productCard.src = image
}