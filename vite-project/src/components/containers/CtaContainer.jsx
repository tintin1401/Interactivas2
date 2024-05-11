import "../../index.css";
import PropTypes from 'prop-types';
import ctaImg from "../../assets/imgs/cta-img.png";
export function CtaContainer({userName, taskNumber, button}){
    return(
      <section className='bg-blue-900 flex justify-between gap-8 px-16  rounded-[3rem] text-white  items-center '>
      <section className='my-8 lg:ml-10 md:ml-10 ml-0 ff-main'>
        <h1 className='font-medium text-blue-100'>Hi {userName}!</h1>
        <p className="lg:text-4xl text-lg mt-5 font-medium max-w-[16ch]">You have completed {taskNumber} task this week!</p>

        <div className="mt-4">
          <a className="bg-[#EFF6FE] text-blue-700 lg:p-[0.40rem_3rem] p-[0.40rem_1rem] rounded-md font-bold lg:text-base text-sm w-1/2" href="#">{button}</a>
        </div>
      </section>

      <div className='hidden lg:block md:block'>
        <img className=" lg:w-[29rem]"  src={ctaImg} alt="cta-img"/>
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