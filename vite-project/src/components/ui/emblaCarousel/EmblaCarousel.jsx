import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'

const EmblaCarousel = (props) => {
    const { slides, options } = props

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 7000 })
    ])
    const [isPlaying, setIsPlaying] = useState(false)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback) => {
            const autoplay = emblaApi?.plugins()?.autoplay
            if (!autoplay) return

            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        autoplay.play();
    }, [emblaApi]);

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        setIsPlaying(autoplay.isPlaying())
        emblaApi
            .on('autoplay:play', () => setIsPlaying(true))
            .on('autoplay:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla mx-auto mt-12 embla-height-cta lg:max-w-[55rem] sm:max-w-[25rem]" ref={emblaRef}>
                <div className="embla__container h-full">
                    <div className="embla__slide flex items-center justify-center">
                        <div class="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
                            <div class="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-600">
                                <div class="w-[5rem] h-[5rem] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                                    <p class="text-white text-[3rem] m-0 flex justify-center items-center">1</p>
                                </div>
                                <p className="text-white text-[1.5rem] m-0 z-50 mt-2">Tareas</p>
                                <div class="absolute top-[5px] left-[5px] embla-bg-card z-20 bg-blue-600 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                                <div class="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%] bg-blue-950 opacity-100 animate-blob-bounce"></div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <div class="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
                            <div class="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-600">
                                <div class="w-[5rem] h-[5m] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                                    <p class="text-white text-[3rem] m-0 flex justify-center items-center">2</p>
                                </div>
                                <p className="text-white text-[1.5rem] m-0 z-50 mt-2">Tareas</p>
                                <div class="absolute top-[5px] left-[5px] embla-bg-card z-20 bg-blue-600 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                                <div class="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%] bg-blue-950 opacity-100 animate-blob-bounce"></div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <div class="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
                            <div class="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-600">
                                <div class="w-[5rem] h-[5rem] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                                    <p class="text-white text-[3rem] m-0 flex justify-center items-center">3</p>
                                </div>
                                <p className="text-white text-[1.5rem] m-0 z-50 mt-2">Tareas</p>
                                <div class="absolute top-[5px] left-[5px] embla-bg-card z-20 bg-blue-600 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                                <div class="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%] bg-blue-950 opacity-100 animate-blob-bounce"></div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <div class="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
                            <div class="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-600">
                                <div class="w-[5rem] h-[5rem] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                                    <p class="text-white text-[3rem] m-0 flex justify-center items-center">4</p>
                                </div>
                                <p className="text-white text-[1.5rem] m-0 z-50 mt-2">Tareas</p>
                                <div class="absolute top-[5px] left-[5px] embla-bg-card z-20 bg-blue-600 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                                <div class="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%] bg-blue-950 opacity-100 animate-blob-bounce"></div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <div class="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
                            <div class="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-600">
                                <div class="w-[5rem] h-[5rem] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                                    <p class="text-white text-[3rem] m-0 flex justify-center items-center">5</p>
                                </div>
                                <p className="text-white text-[1.5rem] m-0 z-50 mt-2">Tareas</p>
                                <div class="absolute top-[5px] left-[5px] embla-bg-card z-20 bg-blue-600 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                                <div class="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%] bg-blue-950 opacity-100 animate-blob-bounce"></div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <div class="col-start-2 col-end-3 row-start-2 row-end-3 justify-self-end">
                            <div class="relative embla-card rounded-[14px] z-50 overflow-hidden flex flex-col items-center justify-center bg-blue-600">
                                <div class="w-[5rem] h-[5rem] rounded-full bg-blue-950 z-40 justify-center items-center flex">
                                    <p class="text-white text-[3rem] m-0 flex justify-center items-center">6</p>
                                </div>
                                <p className="text-white text-[1.5rem] m-0 z-50 mt-2">Tareas</p>
                                <div class="absolute top-[5px] left-[5px] embla-bg-card z-20 bg-blue-600 backdrop-blur-xl rounded-[10px] overflow-hidden"></div>
                                <div class="absolute z-10 top-2/4 left-2/4 w-[150px] h-[150px] rounded-[50%] bg-blue-950 opacity-100 animate-blob-bounce"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EmblaCarousel
