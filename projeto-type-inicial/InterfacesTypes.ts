interface IAddress{
    street: string;
    number: number;
    city: string;
    zip?: string;
};

interface IUser{
    readonly id: number;
    name: string;
    email: string;
    address: IAddress;
};

const student: IUser = {
    id: 1001,
    name: "Ana",
    email: "ana@gmail.com",
    address: {
        street: "Flores",
        number: 123,
        city: "Porto Alegre",
        zip: "924892141"
    }
};

console.log(student)

interface IStudent extends IUser{
    registration: string;
    year: number;
}

const student2: IStudent = {
    id: 1002,
    name: "Maria",
    email: "maria@gmail.com",
    registration: "2901841",
    year: 2,   
    address:{
        street: "Pinhal",
        number: 12,
        city: "Porto"
    }
}

console.log(student2);

export type CategoriaItem = "bebida" | "prato_principal" | "sobremesa";

export type StatusPedido = "aberto" | "pago" | "cancelado";

export interface IItemCardapio {
    readonly id: number;
    nome: string;
    preco: number;
    categoria: CategoriaItem;
}

export interface IPedido {
    readonly id: number;
    cliente: string;
    itens: IItemCardapio[];
    status: StatusPedido;
    observacoes?: string;
}

function calcularTotal(
    pedido: IPedido,
    descontoPercentual?: number
): number {
    if (pedido.status === "cancelado") {
        return 0;
    }

    if (
        descontoPercentual !== undefined &&
        (!Number.isFinite(descontoPercentual) ||
            descontoPercentual < 0 ||
            descontoPercentual > 100)
    ) {
        throw new RangeError("O desconto deve estar entre 0 e 100%." );
    }

    const total = pedido.itens.reduce((soma, item) => soma + item.preco, 0);
    const desconto = descontoPercentual ?? 0;

    return total * (1 - desconto / 100);
}

function adicionarItem(
    pedido: IPedido,
    novoItem: IItemCardapio
): void {
    if (pedido.status === "pago" || pedido.status === "cancelado") {
        console.error("Não é possível adicionar itens a um pedido encerrado.");
        return;
    }

    pedido.itens.push(novoItem);
}