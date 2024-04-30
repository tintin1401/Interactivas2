import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from '../emblaCarousel/EmblaCarousel.jsx'
import '../../../css/embla.css'
import '../../../css/sandbox.css'
import '../../../css/embla.css'
import '../../../index.css'


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

