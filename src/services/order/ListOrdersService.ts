import primaCliente from "../../prisma";

class ListOrdersService{
    async execute(){

        const orders = await primaCliente.order.findMany({
            where: {
                draft: false,
                status: false,
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return orders;

    }
}

export { ListOrdersService }