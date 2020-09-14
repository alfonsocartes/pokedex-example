import React from "react";
import Head from "next/Head";

export default function Layout({ title, children }) {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-blue-200">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto pt-8 min-h-screen">{children}</main>
    </div>
  );
}
