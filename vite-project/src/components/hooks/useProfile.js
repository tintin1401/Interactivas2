import { useState , useEffect }  from "react";
 
/**
 * Returns an object with state and functions related to the user profile.
 *
 * @return {Object} An object with the following properties:
 *   - modal: A boolean indicating whether the modal is open or closed.
 *   - openModal: A function to toggle the modal's visibility.
 *   - sidebarToggle: A boolean indicating whether the sidebar is toggled.
 *   - isSidebarVisible: A boolean indicating whether the sidebar is visible.
 *   - isProfileVisible: A boolean indicating whether the profile is visible.
 *   - setIsProfileVisible: A function to set the visibility of the profile.
 *   - setIsSidebarVisible: A function to set the visibility of the sidebar.
 *   - setSidebarToggle: A function to toggle the sidebar.
 */
export const useProfile = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
      };

    
    
    useEffect(() => {
        const sidebarTimer = setTimeout(() => {
            setIsSidebarVisible(true);
        }, 100);
        const profileTimer = setTimeout(() => {
            setIsProfileVisible(true);
        }, 100);

        return () => {
            clearTimeout(sidebarTimer);
            clearTimeout(profileTimer);
        };
    }, []);

    return { modal, openModal , sidebarToggle ,isSidebarVisible, isProfileVisible,setIsProfileVisible,setIsSidebarVisible, setSidebarToggle};

    
}
