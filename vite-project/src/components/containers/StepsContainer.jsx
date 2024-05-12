import "../../index.css";
import { useInView, motion, useScroll } from "framer-motion";
export function StepsContainer({ stepNumber, title, description }) {
    return (
        <div className="bg-blue-950 p-[1.5rem] rounded-[0.625rem]">
            <span className="text-white font-bold bg-orange-500 p-[0.625rem] rounded-[0.125rem] ff-main">{stepNumber}</span>
            <h3 className="text-white font-bold my-5 text-2xl ff-main">{title}</h3>
            <p className="text-white my-5 text-base ff-secondary">{description}</p>
            <motion.div
                className="text-white bg-orange-500 p-[0.40rem_1rem] w-full block text-center rounded-md ff-main font-bold text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <a href="#"><span>See more</span></a>
            </motion.div>
        </div>
    )
}