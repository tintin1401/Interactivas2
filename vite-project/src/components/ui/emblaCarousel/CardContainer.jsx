import "../../../index.css";
import { TaskCard } from "./TaskCard.jsx";
/**
 * Renders a container component that displays a list of task cards.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.items - An array of task objects to be displayed.
 * @return {JSX.Element} The rendered container component.
 */
export function CardContainer({items}) {

    return(
        <>
            {items.map(item => <TaskCard
            key={item.id}
            number={item.number}
            tasks={item.tasks}/>)}
        </>
    );
}