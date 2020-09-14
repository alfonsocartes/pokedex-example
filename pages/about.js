//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout title="About Pokedex" buttonLink="/" buttonText="Home">
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <div class="w-20 h-20 relative mb-4">
                    <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                      <img
                        src="https://avatars1.githubusercontent.com/u/3504951?s=460&u=6fd136fb3de88e86ae2cd8741b0e48d524fcb9d1&v=4"
                        alt="Alfonso Cartes"
                        class="object-cover object-center w-full h-full visible group-hover:hidden"
                      />
                    </div>
                  </div>
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Alfonso Cartes
                  </h2>
                  <div class="w-12 h-1 bg-purple-700 rounded mt-2 mb-4"></div>
                  <p class="text-left text-gray-600">
                    Hey, thanks for taking a look at this demo app excercise.
                  </p>
                  <br />
                  <p class="text-left text-gray-600">
                    Please take a look at my main website:
                    <br />
                    <a
                      href="https://www.cartes.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-purple-700 ml-1"
                    >
                      {" "}
                      www.cartes.dev{" "}
                    </a>
                    <br />
                    and follow me on twitter:
                    <br />
                    <a
                      href="https://twitter.com/cartes_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-purple-700 ml-1"
                    >
                      @cartes_dev
                    </a>
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div class="leading-relaxed text-md mb-4">
                  <p>
                    <strong>Pokédex is a DEMO web app</strong> to showcase web
                    development technologies such as:
                  </p>
                  <ul class="list-disc leading-relaxed text-md m-4">
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Static Site Generation</li>
                    <li>Server Side Rendering</li>
                    <li>RESTful API</li>
                    <li>TailWind CSS</li>
                    <li>HTML 5</li>
                  </ul>
                  <p>
                    You can download the code and build the app with Static Site
                    Generation or Server Side Rendering by changing a{" "}
                    <strong>var</strong> in
                    <strong> index.js</strong>.{" "}
                    <em>Please see the comments in the file.</em>
                  </p>
                </div>
                <a
                  href="https://github.com/alfonsocartes/pokedex-example"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-purple-700 inline-flex items-center"
                >
                  Github
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
