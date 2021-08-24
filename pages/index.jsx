import Head from 'next/head';
import { useState, useEffect } from 'react';
import {isChrome, isBrowser, isMobile, isSafari} from 'react-device-detect'
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Creative from '../components/Creative/Creative';
import Dashboard from '../components/Dashboard/Dashboard';
import Products from '../components/Products/Products';


export default function Home() {

  return (
    <>
      <Head>
        <title>ninedreams | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="http://localhost:8097"></script>
      </Head>
      {/* <section className="testing">
        Testing
      </section> */}
      <section className="dashboard" id="home">
      <Dashboard/>
      </section>
      <section className="products" id="products">
        <Products/>
      </section>
      <section className="contact" id="contact">
        <Contact/>
      </section>
      {/* <section className="about" id="about">
        <About/>
      </section> */}
      <section className="creative" id="creative">
        <Creative/>
      </section>
    </>
  );
}