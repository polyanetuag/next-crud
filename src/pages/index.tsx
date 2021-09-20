import Layout from "../components/Layout";

export default function Home() {
  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-600 to-blue-600
      text-white
    `}
    >
      <Layout title="Cadastro de Usuário Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  );
}
