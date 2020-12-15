import React,{useState,useEffect} from 'react';
import './App.css';
import { Heading } from './Components/Heading';
// import { Countdown } from './Components/Countdown';
import { UnsplashImage } from './Components/UnsplashImage';
import Loader  from './Components/Loader'

import axios from 'axios';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

//style
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-align:center;
  }
  body {
    font-family: sans-serif;
  } 
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  grid-auto-rows:300px;
`;

function App() {
  const[images, setImages]=useState([]);
  const fetchImages= ()=>{
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then(res=> setImages([...images, ...res.data]))
  }

  useEffect(()=>{
    fetchImages();
  },[])
  return (
    <div className="app">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {images.map(image=>{
            return <UnsplashImage url={image.urls.thumb} key={image.id} />
          })}
          
        </WrapperImage>
      </InfiniteScroll>
      {/* <Countdown /> */}
    </div>
  );
}

export default App;
