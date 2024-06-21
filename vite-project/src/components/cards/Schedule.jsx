import "../../index.css";
import { EventCard } from "./EventCard";
import { useFetchActivities } from "../hooks/useFetchActivities";

/**
 * Renders a schedule component that displays a list of events.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.items - An array of event objects to be displayed.
 * @return {JSX.Element} The rendered schedule component.
 */
export function Schedule({activities}) {

    const createCards = (items) => {
        return items.map(item => ( <EventCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.name}
            date={item.date}
            event={item.labels_name}
            hour={item.hour}
            description={item.description}
            calender={item.calender}
        />));
    }

    return (
        <>
            
           {
            createCards(activities)
           }
            
        </>
    );

}