import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import clientsCollection from "../firebase/db/clientsCollection";

export default function Home() {
  const repo: ClientRepository = new clientsCollection();

  //configurando função cliente vazio
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      setVisible("table");
    });
  }

  function seletedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  async function excludedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
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
