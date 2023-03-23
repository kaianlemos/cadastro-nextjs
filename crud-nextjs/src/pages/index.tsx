import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 20, '2'),
    new Cliente('Carlos', 40, '3'),
    new Cliente('Pedro', 16, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function novoCliente() {
    setCliente(Cliente.vazio())    
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function salvar (cliente: Cliente) {
    console.log(cliente)
  }



  return (
    <div className={
      `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white
      `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao cor="green" className="mb-4" onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <>
            <Formulario cliente={cliente} cancelado={() => setVisivel('tabela')} clienteMudou={salvar}/>
          </>
        )}
      </Layout>
    </div>
  )
}
