import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    create(cliente: Cliente): Promise<Cliente>
    delete(cliente: Cliente): Promise<void>
    getAll(): Promise<Cliente[]>
}