import Head from "next/head";
import Layout from "../components/Layouts";

export default function Home() {
  return (
    <Layout title="Pokedex">
      <h1 className="text-4xl mb-8 text-center">Welcome to the Pokedex!</h1>
    </Layout>
  );
}
