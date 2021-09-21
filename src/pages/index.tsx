import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clients = [
    new Client("Clara", 32, "1"),
    new Client("Marcos", 19, "2"),
    new Client("Alice", 40, "3"),
    new Client("Cláudio", 56, "4"),
  ];

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-600 to-blue-600
      text-white
    `}
    >
      <Layout title="Cadastro de Usuário Simples">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  );
}
