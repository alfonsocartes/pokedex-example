//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import Layout from "../components/Layout";
import Link from "next/Link";

/*
 *
 * Main Component.
 * Component to add a new note: ID(UUID), Title and Content
 * To see it in context, please take a look at /components/Notes.jsx
 *
 */

export default function Home({ pokemons }) {
  return (
    <Layout title="Pokedex">
      <div class="flex flex-wrap flex-col mb-4 p-8 items-center text-center rounded overflow-hidden shadow-lg bg-white">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-700">
          Pokedex
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base text-purple-500">
          Take a look at the 1st Gen Pokemons
        </p>
        <Link href="/about">
          <button className="text-white bg-purple-600 hover:bg-purple-800 min-w-full px-6 py-4 text-l text-center font-bold capitalize rounded overflow-hidden">
            {pokemon.name}
          </button>
        </Link>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {pokemons.map((pokemon, index) => {
          /* Server Side Rendering: */
          const ssrHref = `/pokemon?id=${index + 1}`;
          /* Static Site Generation: */
          const ssgHref = `/pokemon/${index + 1}`;
          return (
            <div key={index} className="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 ">
              {/* Change here for testing SSR or SSG: */}

              <div className="max-w-sm m-2 rounded overflow-hidden shadow-lg mb-4 bg-white">
                <img
                  className="w-full"
                  src={pokemon.image}
                  alt={pokemon.name}
                />
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 ">
                    <span>#{index + 1}</span>
                  </div>
                  <Link href={ssgHref}>
                    <button className="text-white bg-purple-600 hover:bg-purple-800 min-w-full px-6 py-4 text-xl text-center font-bold capitalize rounded overflow-hidden">
                      {pokemon.name}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

// The index page will be static generated:
export async function getStaticProps(context) {
  try {
    //Fetch is now build into nextjs
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemons = results.map((result, index) => {
      // This way we can add the two zeros before the pokemon number.
      // Also it's +1 because pokemon stasts at 1 and index at 0.
      // Then we will grab the last three characters to fix things like: 0012 -> 012
      const paddedIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return {
        ...result,
        image,
      };
    });
    return {
      props: { pokemons },
    };
  } catch (error) {
    console.error(error);
  }
}
