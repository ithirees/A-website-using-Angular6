export class orderList {
    public name:string;
    public price:number;
    public quantity?:number;

    constructor(ordername:string, orderprice:number)
    {
        this.name = ordername;
        this.price = orderprice;
    }
}