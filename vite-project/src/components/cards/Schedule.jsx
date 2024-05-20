import "../../index.css";
import { EventCard } from "./EventCard";

/**
 * Renders a schedule component that displays a list of events.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.items - An array of event objects to be displayed.
 * @return {JSX.Element} The rendered schedule component.
 */
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
            description={item.description}
            calender={item.calender}/>)}
        </>
    );
}