import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/index/Navbar';
import TopPaper from '@/components/index/TopArticle';
import BottomArticle from '@/components/index/BottomArticle';
import RecentEvents from '@/components/index/RecentEvents';
import Footer from '@/components/index/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LangContext } from '@/contexts';
import Contact from '@/components/index/Contact';
import Colleagues from '@/components/index/Colleagues';

const theme = createTheme({
  typography: {
    fontFamily: 'IRANYekanX',
  },
});

export default function Home() {
  const [lang, setLang] = useState('fa');

  return (
    <>
      <Head>
        <title>Robonit - IWG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="Content-Language" content="fa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LangContext.Provider value={lang}>
        <ThemeProvider theme={theme}>
          <Navbar setLang={setLang} />
          <main className={styles.main}>
            <TopPaper />
            <BottomArticle />
            <RecentEvents />
            <Contact />
          </main>
          <Colleagues />
          <Footer />
        </ThemeProvider>
      </LangContext.Provider>
    </>
  );
}
