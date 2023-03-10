import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import react, { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [buttonSize, setButtonSize] = useState({ width: 100, height: 50 });
  const [bgColor, setbgColor] = useState(0);
  const [buttonTextIndex, setButtonTextIndex] = useState(1);
  const ClickMeList = [
    'Click me', 
    'Vajuta mind', 
    '点击我', 
    'Klikněte mě',
    'Klik mig',
    'Klik me',
    'Klikkaa minua',
    'Cliquez-moi',
    'Klick mich',
    'Kattints rám'
  ];
  const [buttonText, setButtonText] = useState(ClickMeList[0]);
  const [shouldShake, setShouldShake] = useState(false);
  
  

  // useEffect(() => { 
  //   //setButtonSize({ width: window.innerWidth / 10, height: window.innerHeight / 20 });
  //   function handleResize() { 
  //   setButtonSize({ width: window.innerWidth / 10, height: window.innerHeight / 20 });
  //   }
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      document.body.style.backgroundColor = `rgba(255,255,255,${bgColor})`;
    } else {
      document.body.style.backgroundColor = `rgba(0,0,0,${bgColor})`;
    };
  }, [bgColor]);

  useEffect(() => {
    if (shouldShake) {
      const timeoutId = setTimeout(() => {
        setShouldShake(false);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [shouldShake]);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const interval = setInterval(() => {
      setbgColor((bgColor) => {
        return prefersDarkMode ? Math.min(1, bgColor + 0.01) : Math.max(0, bgColor - 0.01);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleHover = () => {
    setButtonSize({ width: buttonSize.width * 1.2, height: buttonSize.height * 1.2 });
  };

  const handleLeave = () => {
    setButtonSize({ width: buttonSize.width / 1.2, height: buttonSize.height / 1.2 });
  };

  const handleDown = () => {
    setButtonSize({ width: buttonSize.width / 1.1 , height: buttonSize.height / 1.1 });
  };

  const handleUp = () => {
    setButtonSize({ width: buttonSize.width * 1.1 , height: buttonSize.height * 1.1 });
  };

  const handleButtonClick = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!prefersDarkMode) {
      setbgColor(bgColor > 1 ? bgColor : bgColor + 0.1);
    } else {
      setbgColor(bgColor < 0 ? bgColor : bgColor - 0.1);
    };
    setButtonTextIndex((buttonTextIndex + 1) % ClickMeList.length);
    setButtonText(ClickMeList[buttonTextIndex]);
    setShouldShake(true);
  };

  return (
    <>
      <Head>
        <title>The Button</title>
        <meta name="description" content="It does stuff." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <button
              className={shouldShake ? 'shake' : ''}
              style={{ width: buttonSize.width, 
                height: buttonSize.height, 
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              onMouseDown={handleDown}
              onMouseUp={handleUp}
              onClick={handleButtonClick}
            >
              <div>{buttonText}</div>
              <div>{Math.round(bgColor*100)/100}</div>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
