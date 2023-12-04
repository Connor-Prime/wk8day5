import { Product } from "./productClass"
import { Shop } from "./shop"
import { Cart } from "./Users"
import User from "./Users"
import "./UniversalFunctions"

// let productName:HTMLElement = document.getElementById("product-name")!
// let productPrice:HTMLElement = document.getElementById("product-price")!
// let productDescription:HTMLElement = document.getElementById("product-description")!
// let productList:HTMLElement = document.getElementById("product-list")!
// let addItemBtn:HTMLElement = document.getElementById("add-item-btn")!
let logInBtn = document.getElementById("login-btn")

let ageInput =document.querySelector("#age-input")
let usernameInput=document.querySelector("#username-input")


let addFunction = (store:Shop,item:string):void =>{
    let product=store.storage[item];
    let amountTaken = (document.querySelector(`#${product.name.replace(" ","-")}-amount`) as HTMLInputElement).value
    console.log("click")
    if(Number(amountTaken) <= product.amount){
        product.amount -= Number(amountTaken)

        let cart =  store.currentUser.cart;

        if (!(product.name in cart.items)){
            let cartProduct:Product = new Product(product.name,product.description,product.price, (product.amount-Number(amountTaken)))
            cartProduct.amount = Number(amountTaken)
            store.currentUser.cart.addProduct(cartProduct)
        }else{
            store.currentUser.cart.items[item].changeAmount(-amountTaken)
        }

        store.showItems()
    }

}

let deleteProduct = (cart:Cart,product:Product)=>{
    cart.deleteProduct(product.name)
}

let store = new Shop(addFunction)


// Creating the six products to sell.
store.addProduct("Banana","Fresh yellow bananas",.25,30)
store.addProduct("Strawberries","Fresh red strawberries",3.25,30)
store.addProduct("Apple","Crisp red macntoth apple",.25,30)
store.addProduct("Blueberries","Sweet little basket of blueberries",3.55,30)
store.addProduct("Oranges","Fresh navel oranges",1.25,20)
store.addProduct("Romain Lettuce","A head of romain lettuce",1.25,30)

store.showItems()

User.loginInUser("Connor","26",store)

store.loginUser()


let login=():void=>{

    let username=(usernameInput as HTMLInputElement).value
    let age=(usernameInput as HTMLInputElement).value
    User.loginInUser(username,age,store)
    store.loginUser()
}

logInBtn?.addEventListener("click",(event)=>{login()})
