import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from '../emblaCarousel/EmblaCarousel.jsx'
import '../../../css/embla.css'
import '../../../index.css'


/**
 * Renders the Index component which displays an EmblaCarousel with 3 slides.
 *
 * @return {JSX.Element} The rendered Index component.
 */
export function Index() {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const App = () => (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );

  return <App />;
}

