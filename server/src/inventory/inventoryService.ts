import { InventoryRepository } from "./inventoryRepository";

export class InventoryService{
    //private variable so it cannot be accessed by other files
    private repo: InventoryRepository;

    //creates instance 
    constructor() {
        this.repo = new InventoryRepository();
    }

    //function to fetch all the items
    async getAllItems(){
        return await this.repo.findAll();
    }

    // add an item
    async createItem(name: string, quantity:number, price:number){
        if (quantity < 0 || price < 0) throw new Error("Invalid item values");
        return await this.repo.create({name, quantity,price});
    }

    //update Item
    async updateItem(id: number, data: {name?: string; quantity?:number; price?:number}){
        return await this.repo.update(id,data)
    };

    async delete(id: number){
        return await this.repo.delete(id)
    };
}