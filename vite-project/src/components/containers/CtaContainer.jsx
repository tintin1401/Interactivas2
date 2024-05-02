import "../../index.css";
import PropTypes from 'prop-types';
import ctaImg from "../../assets/imgs/cta-img.png";
export function CtaContainer({userName, taskNumber, button}){
    return(
      <section className='bg-blue-700 p-[2rem] grid grid-cols-2 gap-8 rounded-[3rem] text-white items-center '>
      <section className='lg:ml-10 md:ml-10 ml-0 ff-main'>
        <h1 className='font-medium'>Hi {userName}!</h1>
        <p className="lg:text-3xl text-lg mt-5 font-medium max-w-[18ch]">You have completed {taskNumber} task this week!</p>

        <div className="mt-6">
          <a className="bg-white text-blue-700 lg:p-[0.40rem_3rem] p-[0.40rem_1rem] rounded-md font-bold lg:text-base text-sm w-1/2" href="#">{button}</a>
        </div>
      </section>

      <div className='lg:block md:block'>
        <img  src={ctaImg} alt="cta-img"/>
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