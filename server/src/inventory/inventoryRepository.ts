import prisma from "../prisma/client"

export class InventoryRepository{

    async findAll() {
        return await prisma.item.findMany();
    }

    async create(data: {name: string; quantity:number; price:number}){
        return await prisma.item.create({data});
    }

    async update(id: number, data: {name?: string; quantity?: number; price?: number}){
        return await prisma.item.update({
            where: {id},
            data,
        })
    }

    async delete(id:number){
        return await prisma.item.delete({
            where:{id}
        })
    }
}