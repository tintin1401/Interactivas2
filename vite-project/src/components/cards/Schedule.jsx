import "../../index.css";
import { EventCard } from "./EventCard";

export function Schedule({items}) {

    return(
        <>
            {items.map(item => <EventCard
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            event={item.event}
            hour={item.hour}
            description={item.description}/>)}
        </>
    );
}