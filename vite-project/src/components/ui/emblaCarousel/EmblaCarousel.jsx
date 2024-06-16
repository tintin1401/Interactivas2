import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { CardContainer } from './CardContainer.jsx';
import { PorcentageCard } from './PorcentageCard.jsx';

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 7000, stopOnInteraction: false })
    ]);

    const [cards, setCards] = useState([
        { id: 1, number: "0", tasks: "Tasks Completed Today" },
        { id: 2, number: "0", tasks: "Tasks Completed per Week" },
    ]);

    useEffect(() => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentWeek = getWeekNumber(currentDate);

        function getWeekNumber(date) {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            d.setDate(d.getDate() + 4 - (d.getDay() || 7));
            const yearStart = new Date(d.getFullYear(), 0, 1);
            const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
            return weekNo;
        }

        fetch("http://localhost/calenderbackend/public/api/activities/tasks/completed-per-week")
            .then(response => response.json())
            .then(data => {
                const currentWeekTasks = data
                    .filter(task => {
                        const taskWeek = parseInt(task.week.toString().slice(-2), 10);
                        const taskYear = parseInt(task.week.toString().slice(0, 4), 10); 
                        const isCurrentWeek = taskYear === currentYear && taskWeek === currentWeek;
                        return isCurrentWeek;
                    });

                const tasksSum = currentWeekTasks.reduce((sum, task) => {
                    return sum + (task.count || 0); 
                }, 0);

                setCards(prevCards => prevCards.map(card => 
                    card.id === 2 
                    ? { ...card, number: data.length, tasks: "Tasks Completed per Week" } 
                    : card
                ));
            })
            .catch(error => console.error('Error fetching weekly tasks:', error));

        fetch("http://localhost/calenderbackend/public/api/activities/tasks/completed-per-day")
            .then(response => response.json())
            .then(data => {
                const todayTasks = data.reduce((sum, task) => sum + (task.count || 0), 0);

                setCards(prevCards => prevCards.map(card =>
                    card.id === 1
                    ? { ...card, number: todayTasks, tasks: "Tasks Completed Today" } 
                    : card
                ));
            })
            .catch(error => console.error('Error fetching daily tasks:', error));
    }, []);

    return (
        <div className="embla">
            <div className="embla mx-auto mt-12 embla-height-cta lg:max-w-[55rem] sm:max-w-[25rem]" ref={emblaRef}>
                <div className="embla__container h-full">
                    <CardContainer items={cards} />
                    <PorcentageCard />
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
