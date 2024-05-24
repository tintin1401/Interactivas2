import { useState , useEffect }  from "react";

/**
 * Returns an object with state and functions related to the home page.
 *
 * @return {Object} An object with the following properties:
 *   - sidebarToggle: A boolean indicating whether the sidebar is toggled.
 *   - setSidebarToggle: A function to toggle the sidebar.
 *   - isSidebarVisible: A boolean indicating whether the sidebar is visible.
 *   - isCtaVisible: A boolean indicating whether the CTA is visible.
 *   - isIndexVisible: A boolean indicating whether the index is visible.
 *   - isScheduleVisible: A boolean indicating whether the schedule is visible.
 *   - isCalendarVisible: A boolean indicating whether the calendar is visible.
 */
export const useHome = () =>{
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);
    const [isIndexVisible, setIsIndexVisible] = useState(false);
    const [isScheduleVisible, setIsScheduleVisible] = useState(false);
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);

    useEffect(() => {
        const sidebarTimer = setTimeout(() => {
            setIsSidebarVisible(true);
        }, 500);
        const ctaTimer = setTimeout(() => {
            setIsCtaVisible(true);
        }, 500);

        const indexTimer = setTimeout(() => {
            setIsIndexVisible(true);
        }, 500);

        const scheduleTimer = setTimeout(() => {
            setIsScheduleVisible(true);
        }, 500);
        const calendarTimer = setTimeout(() => {
            setIsCalendarVisible(true);
        }, 500);

        return () => {
            clearTimeout(sidebarTimer);
            clearTimeout(ctaTimer);
            clearTimeout(indexTimer);
            clearTimeout(scheduleTimer);
            clearTimeout(calendarTimer);
        };
    }, []);

    return { sidebarToggle, setSidebarToggle, isSidebarVisible, isCtaVisible, isIndexVisible, isScheduleVisible, isCalendarVisible };
}