//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from 'react'
import Pokemon from '../components/Pokemon'

export default function pokemon ({ pokemon }) {
  return <Pokemon pokemon={pokemon} />
}

// The index page will be server side rendered:
export async function getServerSideProps ({ query }) {
  const id = query.id
  try {
    // Fetch is now build into nextjs
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await res.json()
    // This way we can add the two zeros before the pokemon number.
    // Also it's +1 because pokemon stasts at 1 and index at 0.
    // Then we will grab the last three characters to fix things like: 0012 -> 012
    const paddedIndex = ('00' + id).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
    pokemon.image = image
    return {
      props: { pokemon }
    }
  } catch (error) {
    console.error(error)
  }
}
