import Button from "../components/Button";
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

  function seletedClient(client: Client) {
    console.log(client.name);
  }

  function excludedClient(client: Client) {
    console.log(`Excluir...${client.name}`);
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-600 to-blue-600
      text-white
    `}
    >
      <Layout title="Cadastro de Usuário Simples">
        <div className="flex justify-end">
          <Button color="green" className="mb-4">
            Novo cliente
          </Button>
        </div>
        <Table
          clients={clients}
          selectedCustomer={seletedClient}
          excludedCustomer={excludedClient}
        />
      </Layout>
    </div>
  );
}
