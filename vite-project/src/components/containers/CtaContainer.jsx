import "../../index.css";
import PropTypes from 'prop-types';
import ctaImg from "../../assets/imgs/cta-img.png";
import { useUser } from '../../context/UserContext.jsx';
/**
 * Renders a call-to-action container component with the given user name, task number, and button.
 *
 * @param {Object} props - The properties for the call-to-action container component.
 * @param {string} props.userName - The name of the user.
 * @param {string} props.taskNumber - The number of tasks completed this week.
 * @param {string} props.button - The text for the call-to-action button.
 * @return {JSX.Element} The rendered call-to-action container component.
 */
export function CtaContainer({userName, taskNumber, button}){
  const { user } = useUser();
    return(
      <section className='bg-blue-900 flex justify-between gap-8 px-16 rounded-[3rem] text-white items-center'>
      <section className='my-8 lg:ml-10 md:ml-10 ml-0 ff-main'>
        <h2 className='font-medium text-blue-100'>Hi {user.name}!</h2>
        <p className="lg:text-4xl text-lg mt-5 font-medium max-w-[16ch]">You have completed {taskNumber} task this week!</p>

        <div className="mt-4">
          <a className="bg-[#EFF6FE] text-blue-700 lg:p-[0.40rem_3rem] p-[0.40rem_1rem] rounded-md font-bold lg:text-base text-sm w-1/2 hover:bg-orange-500 hover:text-white transition duration-500" href="#">{button}</a>
        </div>
      </section>

      <div className='hidden lg:block md:block'>
        <img className="lg:w-[29rem]"  src={ctaImg} alt="cta-img"/>
      </div>
    </section>
    )
}

CtaContainer.propTypes = {
    userName: PropTypes.string.isRequired,
    taskNumber: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};

CtaContainer.defaultProps = {
    userName: "User",
    taskNumber: "6",
    button: "See All",
};