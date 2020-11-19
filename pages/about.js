//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout title="About Pokedex" buttonLink="/" buttonText="Home">
      <section className="text-gray-600 dark:text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <div className="w-20 h-20 relative mb-4">
                    <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                      <Image
                        src="https://avatars1.githubusercontent.com/u/3504951?s=460&u=6fd136fb3de88e86ae2cd8741b0e48d524fcb9d1&v=4"
                        height={460}
                        width={460}
                        alt="Alfonso Cartes"
                        className="object-cover object-center w-full h-full visible group-hover:hidden"
                      />
                    </div>
                  </div>
                  <h2 className="font-medium title-font mt-4 text-gray-900 dark:text-gray-200 text-lg">
                    Alfonso Cartes
                  </h2>
                  <div className="w-12 h-1 bg-purple-700 dark:bg-purple-400 rounded mt-2 mb-4"></div>
                  <p className="text-left text-gray-600 dark:text-gray-300">
                    Hey, thanks for taking a look at this demo app.
                  </p>
                  <br />
                  <p className="text-left text-gray-600 dark:text-gray-300">
                    Please take a look at my main website:
                    <br />
                    <a
                      href="https://www.cartes.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 dark:text-purple-400 ml-1"
                    >
                      {" "}
                      www.cartes.dev{" "}
                    </a>
                    <br />
                    and follow me on Twitter:
                    <br />
                    <a
                      href="https://twitter.com/cartes_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 dark:text-purple-400 ml-1"
                    >
                      @cartes_dev
                    </a>
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="leading-relaxed text-md mb-4">
                  <p>
                    <strong>Pokédex is a DEMO web app</strong> to showcase web
                    development technologies such as:
                  </p>
                  <ul className="list-disc leading-relaxed text-md m-4">
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
                  className="text-purple-700 dark:text-purple-400 inline-flex items-center"
                >
                  GitHub
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
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
