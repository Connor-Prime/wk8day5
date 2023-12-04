import { Product } from "./productClass"

let productName:HTMLElement = document.getElementById("product-name")!
let productPrice:HTMLElement = document.getElementById("product-price")!
let productDescription:HTMLElement = document.getElementById("product-description")!
let productList:HTMLElement = document.getElementById("product-list")!
let addItemBtn:HTMLElement = document.getElementById("add-item-btn")!

let shop:{[id:string]:Product}={}

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

function addProduct():void{
    shop[(productName as HTMLInputElement).value]= new Product((productName as HTMLInputElement).value,
                                                                (productPrice as HTMLInputElement).value
                                                                ,(productDescription as HTMLInputElement).value
                                                                );

    listProducts();
}

addItemBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    addProduct()
})

function deleteProduct(item?:string):void{
    if(item!=null){
        delete(shop[item])
        listProducts()
    }
}

deleteProduct()