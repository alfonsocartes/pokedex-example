import Layout from "../components/Layouts";
import Link from "next/Link";

export default function Home({ pokemons }) {
  return (
    <Layout title="Pokedex">
      <h1 className="text-4xl mb-8 text-center">Welcome to the Pokedex!</h1>
      <ul>
        {pokemons.map((pokemon, index) => {
          return (
            <li key={index}>
              <Link href={`/pokemon?id${index + 1}`}>
                <a className="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md">
                  <img
                    className="w-20 h-20 mr-3"
                    src={pokemon.image}
                    alt={pokemon.name}
                  ></img>
                  <span className="mr-2">{index + 1}.</span>
                  {pokemon.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
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
