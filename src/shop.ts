import { Product } from "./productClass"
import User from "./Users"

export class Shop{
    storage:{[id:string]:Product}={}

    users:{[username:string]:User} = {}
    currentUser:User = new User(undefined, undefined)

    _addFunction:Function=()=>{}

    constructor(addFunction:Function){
        this._addFunction=addFunction
    }

    showItems(): void {
        let productList:HTMLElement = document.getElementById("product-list")!
        let html: string = ""
        for (let item in this.storage) {

            let product:Product = this.storage[item]
            html += "<div>"+ product.name + "<br> price: $" + String( product.price) + 
            "<br>description: " +  product.description + "<br>"+
            `${product.amount} in stock<br>`+
            `Enter amount to add:
            <br><input input type="text" name="username" maxlength="3" id="${product.name.replace(" ","-")}-amount"
            <br>
            <br>
            <button id="add-${product.name.replace(" ","-")}">Add to Cart</button><br><br>`
            "<br>"+
            "</div>"
        }
        productList.innerHTML = html
        for (let item in this.storage){
            let product:Product = this.storage[item]
            let amount = (document.querySelector(`#${product.name.replace(" ","-")}-amount`) as HTMLInputElement).value
            let button = document.querySelector(`#add-${product.name.replace(" ","-")}`);
            button?.addEventListener("click",(event)=>{this._addFunction(this,item)})

        }
    

    
        return
    }

    addProduct(name:string,description:string, price:number,amount:number):void{
        this.storage[name]= new Product(name, description, price, amount);
    }

    deleteProduct(item?:string):void{
        if(item!=null){
            delete(this.storage[item])
            this.showItems()
        }
    }
    
    loginUser(){
        let welcomeHeader:HTMLElement = document.getElementById("welcome-header")!
        welcomeHeader.innerText=`Welcome ${this.currentUser.username}`
    }
}

