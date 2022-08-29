import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import '../styles/globals.css';
import Context from '../context';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loading ? (
        <AppLoading>
          <AppLoadingContents>
            <Image
              src='https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png'
              alt='img'
              width={200}
              height={200}
            />
          </AppLoadingContents>
        </AppLoading>
      ) : (
        <>
          <Context.Provider value={{ person, setPerson, searchResult, setSearchResult }}>
            <Header />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </Context.Provider>
        </>
      )}
    </>
  );
}

export default MyApp;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    height: 150px;
    margin-bottom: 20px;
    filter: brightness(0) invert(1);
  }
`;
