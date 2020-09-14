//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Link from "next/Link";

export default function Header({ buttonLink, buttonText }) {
  return (
    <div className="flex mb-4 p-8 items-center text-center rounded overflow-hidden shadow-lg bg-white">
      <div className="w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-700">
          Pokedex
        </h1>
        <p className="leading-relaxed text-base text-purple-500">
          Take a look at the 1st Gen Pokemons
        </p>
      </div>
      <div className="w-1/10">
        <Link href={buttonLink}>
          <button className="text-white bg-purple-600 hover:bg-purple-800 px-2 py-1 text-center font-bold rounded">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}