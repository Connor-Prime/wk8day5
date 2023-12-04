import { Shop } from "./shop";
import { Product } from "./productClass";
export default class User {

    cart:Cart=new Cart((cart:Cart,product:Product)=>{
        cart.deleteProduct(product.name)
    });

    users:{[username:string]:User}={}

    currentUser:User|null=null;

    static loginInUser(username: string | undefined, age: string | undefined, store:Shop ){
        if(username!= undefined && age!= undefined){
            if(username in store.users){
                store.currentUser = store.users[username]
            }else{
                store.users[username]= new User(username, age)
                store.currentUser = store.users[username]
            }
        }

    }

    constructor(private _username: string | undefined, private _age: string | undefined ){}

    public get age(): string | undefined{
        return this._age;
    }
    public set age(value: string) {
        this._age = value;
    }
    public get username(): string | undefined {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public addToCart(product:Product){
        this.cart.addProduct(product)
    }
}


export class Cart{
    items:{[id:string]:Product}={}

    constructor(private deleteItems:Function){
        
    }

    showItems(): void {
        let productList:HTMLElement = document.getElementById("cart-list")!
        let html: string = ""
        for (let item in this.items) {

            let product:Product = this.items[item]
            html += "<div>"+ product.name + "<br> price: $" + String( product.price) + 
            "<br>description: " +  product.description + "<br>"+
            `${product.amount} in your cart<br>`+
            `<button class="remove-${product.name}">Remove From Cart</button><br><br>`+
            "<br>"+
            "</div>"
        }
        for (let item in this.items){
            let product:Product = this.items[item]
            let button = document.querySelector(`#remove-${product.name.replace(" ","-")}`);
            button?.addEventListener("click",(event)=>{
                this.deleteItems(this,product)
                })
        }

        productList.innerHTML = html
    
        return
    }

    addProduct(product:Product):void{
        this.items[product.name]= product;
        this.showItems();
    }

    deleteProduct(item?:string):void{
        if(item!=null){
            delete(this.items[item])
            this.showItems()
        }
    }

}