//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Head from "next/Head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, children, buttonLink, buttonText }) {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-blue-200">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header buttonLink={buttonLink} buttonText={buttonText} />
      <main className="container mx-auto pt-8 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
