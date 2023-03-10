import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import react, { useEffect, useState, useRef } from 'react';

class postsClass {
  constructor(title, body, button, link) {
    this.title = title;
    this.body = body;
    this.button = button;
    this.link = link;
    this.addbutton = this.button === true ? [this.link, 'Play'] : ['', '']
  }
}

export default function Home() {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const links = [];
  links.push(new postsClass('The Button', 'It does stuff', true,'TheButton'));
  links.push(new postsClass('Home', '', true,'index'));
  links.push(new postsClass('Home', '', true,'index'));
  links.push(new postsClass('Home', '', true,'index'));
  links.push(new postsClass('Home', '', true,'index'));
  links.push(new postsClass('Home', '', true,'index'));
  const posts = [];
  for (let post of links) {
    posts.push(post);
  }

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 320; /* adjust this to your desired scroll distance */
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 320; /* adjust this to your desired scroll distance */
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <header class="banner" style={{ backgroundColor: "#f2f2f2"}}>
        <img src="banner.jpg" alt="Banner image" />
      </header>
      <div id="wrapper">

          {/* <div class="sidebar" style={{ display: "inline-block"}}>
            <h2 class="largetext" style={{ padding: '0.5em'}}>Apps:</h2>
            <ul class="largetext ulbulletlist">
              <li><a href="TheButton">The Button</a></li>
            </ul>
          </div> */}
          
          <div className="carousel-container" ref={containerRef}>
            {posts.map(post => (
              <div className="carousel-item" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <a href={post.addbutton[0]}>{post.addbutton[1]}</a>
              </div>
            ))}
            <button className="carousel-nav carousel-nav-left" onClick={handleScrollLeft}>
              &#8249;
            </button>
            <button className="carousel-nav carousel-nav-right" onClick={handleScrollRight}>
              &#8250;
            </button>
          </div>

          <main class="largetext blog" style={{ alignItems: 'center' }}>
            <h1 class="blog__title">NEWS</h1>
            <article class="blog__element">
              <h3 class="blog__heading">Tragic Loss for us all (10.03.2023)</h3>
              <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <article class="blog__element">
              <h3>*</h3>
              <p class="blog__text">*</p>
            </article>
            <article class="blog__element">
              <h3 class="blog__heading">Tragic Loss for us all (10.03.2023)</h3>
              <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <article class="blog__element">
              <h3 class="blog__heading">Tragic Loss for us all (10.03.2023)</h3>
              <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <article class="blog__element">
              <h3 class="blog__heading">Tragic Loss for us all (10.03.2023)</h3>
              <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <article class="blog__element">
              <h3 class="blog__heading">Tragic Loss for us all (10.03.2023)</h3>
              <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <article class="blog__element">
              <h3 class="blog__heading">Tragic Loss for us all (10.03.2023)</h3>
              <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
          </main>
      </div>
      <button class="scroll-to-top"
        onClick={scrollToTop}
      ><span class="arrow-up"></span></button>
    </>
  )
}
