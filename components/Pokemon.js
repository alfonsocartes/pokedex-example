import React from "react";
import Link from "next/Link";
import Layout from "../components/Layout";

export default function Pokemon({ pokemon }) {
  return (
    <Layout title={pokemon.name}>
      <h1 className="text-4xl mb-8 text-center capitalize">{pokemon.name}</h1>
      <img className="mx-auto" src={pokemon.image} alt={pokemon.name}></img>
      <p>
        <span className="font-bold mr-2">Weight: </span>
        {pokemon.weight}
      </p>
      <p>
        <span className="font-bold mr-2">Height: </span>
        {pokemon.height}
      </p>
      <h2 className="text-2xl mt-6 mb-2">Types</h2>
      {pokemon.types.map((type, index) => (
        <p key={index}>- {type.type.name}</p>
      ))}
      <p className="mt-10 text-center">
        <Link href="/">
          <a className="text-2xl underline">Back Home</a>
        </Link>
      </p>
    </Layout>
  );
}
