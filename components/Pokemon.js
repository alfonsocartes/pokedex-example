//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Pokemon({ pokemon }) {
  return (
    <Layout title={pokemon.name} buttonLink="/" buttonText="Home">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt={pokemon.name}
            src={pokemon.image}
            width={475}
            height={475}
          />
        </div>
        <div className="w-full flex flex-wrap flex-col mb-4 p-8 items-center text-center rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-purple-700 dark:text-purple-400 capitalize">
            {pokemon.name}
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-purple-700 dark:text-purple-400">
            <span>#{pokemon.id + 1}</span>
          </h2>
          <div className="w-full flex flex-wrap">
            <div className="w-full p-4">
              <div className="p-8 rounded overflow-hidden shadow-lg bg-purple-100 dark:bg-gray-700">
                <h2 className="text-2xl mb-2  font-medium text-purple-700 dark:text-purple-400">
                  Stats
                </h2>
                <div className="flex flex-wrap flex-row text-left text-gray-900 dark:text-gray-200 ">
                  <div className="w-full xl:w-1/3">
                    <span className="font-bold mr-2 ">Weight: </span>
                    {pokemon.weight}
                  </div>
                  <div className="w-full xl:w-1/3 ">
                    <span className="font-bold mr-2">Height: </span>
                    {pokemon.height}
                  </div>
                  <div className="w-full xl:w-1/3">
                    <span className="font-bold mr-2">Base experience: </span>
                    {pokemon.base_experience}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
              <div className="p-8 rounded overflow-hidden shadow-lg bg-purple-100 dark:bg-gray-700">
                <h2 className="text-2xl mb-2  font-medium text-purple-700 dark:text-purple-400">
                  Types
                </h2>
                {pokemon.types.map((type, index) => (
                  <p
                    key={index}
                    className="text-left capitalize text-gray-900 dark:text-gray-200 "
                  >
                    - {type.type.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
              <div className="p-8 rounded overflow-hidden shadow-lg bg-purple-100 dark:bg-gray-700">
                <h2 className="text-2xl mb-2  font-medium text-purple-700 dark:text-purple-400">
                  Abilities
                </h2>
                {pokemon.abilities.map((ability, index) => (
                  <p
                    key={index}
                    className="text-left capitalize text-gray-900 dark:text-gray-200 "
                  >
                    - {ability.ability.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-8 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-3xl mb-2 text-center font-medium text-purple-700 dark:text-purple-400">
          Moves
        </h2>
        <div className="flex flex-wrap justify-evenly flex-row">
          {pokemon.moves.map((move, index) => (
            <div
              key={index}
              className="m-2 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 mb-4 p-2 rounded-lg border border-purple-300"
            >
              <p className="text-left capitalize text-gray-900 dark:text-gray-200 ">
                {move.move.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="inline-flex text-white border-0 mt-4 mb-8 py-2 px-6 focus:outline-none bg-purple-600 hover:bg-purple-800 rounded text-lg">
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </button>
      </div>
    </Layout>
  );
}
