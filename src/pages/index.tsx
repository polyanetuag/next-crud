import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  //configurando função cliente vazio
  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  const clients = [
    new Client("Clara", 32, "1"),
    new Client("Marcos", 19, "2"),
    new Client("Alice", 40, "3"),
    new Client("Cláudio", 56, "4"),
  ];

  function seletedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function excludedClient(client: Client) {
    console.log(`Excluir...${client.name}`);
  }

  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }

  function saveClient(client: Client) {
    console.log(client);
    setVisible("table");
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
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newClient}>
                Novo cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedCustomer={seletedClient}
              excludedCustomer={excludedClient}
            />
          </>
        ) : (
          <Form
            client={client}
            clientChanged={saveClient}
            canceled={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
