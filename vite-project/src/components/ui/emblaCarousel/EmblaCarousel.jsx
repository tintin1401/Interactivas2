import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CardContainer } from './CardContainer.jsx';
import { PorcentageCard } from './PorcentageCard.jsx';


const EmblaCarousel = (props) => {

    const cards = [
        { "id": 1, "number": "4", "tasks": "Tareas", },
        { "id": 2, "number": "5", "tasks": "Tareas", },
        { "id": 3, "number": "6", "tasks": "Tareas", },
        { "id": 4, "number": "7", "tasks": "Tareas", },
        { "id": 5, "number": "8", "tasks": "Tareas", },
    ]
    
    const { slides, options } = props

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 7000, stopOnInteraction: false })
    ])

    return (
        <div className="embla">
            <div className="embla mx-auto mt-12 embla-height-cta lg:max-w-[55rem] sm:max-w-[25rem]" ref={emblaRef}>
                <div className="embla__container h-full">
                    <CardContainer items={cards} />
                    <PorcentageCard />
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
