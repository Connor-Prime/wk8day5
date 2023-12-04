export class Product{

    constructor(
        private _name: string,
        private _descirption: string,
        private _price: number,
        private _amount: number
        ){
            // this._price = Math.round(parseFloat(_priceString)*100)/100;
        }

        public get description(): string {
            return this._descirption;
        }
        public set description(value: string) {
            this._descirption = value;
        }

        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            this._name = value;
        }

        public get price(): number {
            return this._price
        }
        public set price(value: number) {
            this._price = value
        }

        public get amount(): number {
            return this._amount;
        }
        public set amount(value: number) {
            this._amount = value;
        }

        public changeAmount(num:number){
            this.amount -=num;
        }
    
}