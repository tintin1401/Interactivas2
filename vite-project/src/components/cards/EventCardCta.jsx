import { Schedule } from "./Schedule"
import { Calendar } from "../calender/Calendar";
import "../../index.css";

export function EventCardCta() {
    const events = [
        { "id": 1, "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png", "title": "Task", "date": "August 30, 2024", "event": "Event", "hour": "5:00 p.m.", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod earum, nemo amet sint? Neque veniam architecto animi earum consequatur. Eaque,illo sequi alias suscipit modi commodi quae odio." }
    ]

    return (
        <section class="grid lg:grid-cols-2 justify-center items-center h-screen lg:gap-4  gap-[15rem]">
        <section class="flex flex-col bg-white rounded-3xl">
            <div class="flex justify-center  text-[2rem] text-blue-600 h-[7rem] items-center font-black ff-main">
                <h1 class="text-center">Schedule</h1>
            </div>
            <div class="flex col-start-1 col-end-3 ml-[2rem] lg:col-start-2 lg:col-end-4 gap-4 lg:ml-[5rem] font-bold ff-main">
                <h2 class="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]">Event</h2>
                <h2 class="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]">Task</h2>
                <h2 class="hover:underline hover:decoration-4 cursor-pointer decoration-[#3262DE]">Courses</h2>
            </div>
            <div className="scroll scrollbar-thumb-orange-700 scrollbar-track-white overflow-y-scroll mb-8 lg:scroll-smooth lg:scrollbar-thin p-4 lg:p-10 h-[75vh]">
                <section className="grid gap-4">
                    <Schedule items={events} />
                    <Schedule items={events} />
                    <Schedule items={events} />
                    <Schedule items={events} />
                </section>
            </div>
        </section>

        <Calendar />


    </section>
    );
}

