import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 20, '2'),
    new Cliente('Carlos', 40, '3'),
    new Cliente('Pedro', 16, '4')
  ]

  return (
    <div className={
      `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white
      `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
