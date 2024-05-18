import "../../../index.css";
import { TaskCard } from "./TaskCard.jsx";
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