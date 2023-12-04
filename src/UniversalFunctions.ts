import { Cart } from "./Users"
import { Product } from "./productClass"
import { Shop } from "./shop"

export let addFunction = (store:Shop,item:string):void =>{
    console.log("click")
    store.currentUser.cart.addProduct(store.storage[item])
}

export let deleteProduct = (cart:Cart,product:Product)=>{
    cart.deleteProduct(product.name)
}
