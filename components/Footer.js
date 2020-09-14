import React from "react";

export default function Footer() {
  return (
    <div class="bg-gray-200">
      <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="https://www.cartes.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <span class="ml-3 text-xl">cartes.dev</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Alfonso Cartes —
          <a
            href="https://twitter.com/cartes_dev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 ml-1"
            target="_blank"
          >
            @cartes_dev
          </a>
        </p>
      </div>
    </div>
  );
}
