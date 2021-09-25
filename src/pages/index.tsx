import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import useClients from "../hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    newClient,
    saveClient,
    seletedClient,
    excludedClient,
    tableVisible,
    displayTable,
  } = useClients();

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-600 to-blue-600
      text-white
    `}
    >
      <Layout title="Cadastro de Usuário Simples">
        {tableVisible ? (
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
            canceled={displayTable}
          />
        )}
      </Layout>
    </div>
  );
}
