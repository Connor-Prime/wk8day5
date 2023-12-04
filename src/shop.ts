import { Product } from "./productClass"

let shop:{[id:string]:Product}={}


let productList:HTMLElement = document.getElementById("product-list")!

function listProducts(): void {

    let html: string = ""
    for (let item in shop) {
        html += shop[item].name + "<br> price: $" + String(shop[item].price) + 
        "<br>description: " + shop[item].description + "<br><br>"+
        `<button id="delete-${shop[item].name}"=>delete ${shop[item].name}</button>`
    }

    productList.innerHTML = html

    for (let item in shop) {
        let deleteBtn=document.getElementById(`delete-${shop[item].name}`)
        deleteBtn?.addEventListener("click",()=>{
            deleteProduct(`${shop[item].name}`)
        })
    }
    return
}