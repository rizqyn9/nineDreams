import Head from 'next/head';
import { useState, useEffect } from 'react';
import {isChrome, isBrowser, isMobile, isSafari} from 'react-device-detect'
import Dashboard from '../components/Dashboard/Dashboard';
import Products from '../components/Products/Products';


export default function Home() {

  return (
    <>
      <Head>
        <title>ninedreams | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home" style={{color:"red"}}>
        <section className="dashboard">
          <Dashboard/>
        </section>
        <section className="products">
          <Products/>
        </section>
      </main>
    </>
  );
}