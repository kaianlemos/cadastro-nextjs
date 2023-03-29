import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {

    }, [])

    function obterTodos() {
        repo.getAll().then((clientes) => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.delete(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        repo.create(cliente)
        obterTodos()
    }

    return {
        tabelaVisivel,
        formularioVisivel,
        cliente,
        clientes,
        exibirTabela,
        obterTodos,
        selecionarCliente,
        novoCliente,
        excluirCliente,
        salvarCliente
    }
}