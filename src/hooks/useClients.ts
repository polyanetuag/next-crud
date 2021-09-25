import { useEffect, useState } from "react";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import clientsCollection from "../firebase/db/clientsCollection";
import useVisible from "./useVisible";

export default function useClients() {
  const repo: ClientRepository = new clientsCollection();

  const { tableVisible, displayForm, displayTable } = useVisible();

  //configurando função cliente vazio
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      displayTable();
    });
  }

  function seletedClient(client: Client) {
    setClient(client);
    displayForm();
  }

  async function excludedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    displayForm();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clients,
    newClient,
    saveClient,
    excludedClient,
    seletedClient,
    getAll,
    tableVisible,
    displayTable,
  };
}
