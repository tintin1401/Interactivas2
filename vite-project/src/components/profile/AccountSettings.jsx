import "../../index.css";
import { ChangePassword } from '../profile/ChangePassword.jsx';
import Modal from '@mui/material/Modal';
import { useProfile } from '../hooks/useProfile.js';
import { InputProfile } from '../inputs/InputProfile.jsx';
/**
 * Renders the Account Settings component.
 *
 * @return {JSX.Element} The rendered Account Settings component.
 */
export function AccountSettings() {

    const { modal, openModal } = useProfile();
    const body = (
        <div className="bg-white w-[90%] md:w-[40%] lg:w-[25%] rounded-3xl p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ChangePassword close={openModal}/>       
        </div>
    )

    return (
        <section>
            <h1 className='font-bold text-blue-700 text-3xl mb-2 pt-4'>Account Settings</h1>
            <div className="flex items-center gap-4 mb-8">
                <img className='block rounded-[50%] w-20 object-cover' src="https://randomuser.me/api/portraits/women/31.jpg" alt="User Profile" />
                <p className='text-md font-medium'>User Name</p>
            </div>
            <div className="grid md:grid-cols-[auto_auto] gap-2 ">
                <InputProfile placeholder="Full name" type="text" id="fullName" label="Full name" />
                <InputProfile placeholder="Carnet" type="text" id="carnet" label="Carnet" />
                <InputProfile placeholder="Email" type="email" id="email" label="Email" />
                <div className='grid '>
                    <InputProfile placeholder="Password" type="password" id="password" label="Password" />
                    <a className=' text-blue-700 items-end cursor-pointer' onClick={openModal}>Change</a>
                </div>
            </div>
            <Modal open={modal} onClose={openModal}>
                {body}
            </Modal>
        </section>
    )
}