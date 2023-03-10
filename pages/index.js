import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import react, { useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <header style={{ backgroundColor: "#f2f2f2"}}>
        <img src="banner.jpg" alt="Banner image" />
      </header>
      <div id="wrapper" style={{display: "flex"}}>

          <div style={{ display: "inline-block", backgroundColor: "#f2f2f2", height: "100vh", width: "10vw" }}>
            <h2 class="largetext">Apps:</h2>
            <ul class="largetext">
              <li><a href="TheButton">1. The Button</a></li>
            </ul>
          </div>


          <main class="largetext" style={{width: "80vw", margin: "2%"}}>
            <h1>News</h1>
            <article class="blog">
              <h3>*</h3>
              <p>*</p>
            </article>
          </main>

      </div>
    </>
  )
}
