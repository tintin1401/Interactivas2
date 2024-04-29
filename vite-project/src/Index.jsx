import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import '../src/css/base.css'
import '../src/css/sandbox.css'
import '../src/css/embla.css'
import './index.css'


export function Index() {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const App = () => (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );

  return <App />;
}

