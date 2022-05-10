import React from 'react';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton'
const ContactUs = () => {
    return (
        <div className='my-8' style={{
            background: `url(${appoinment})`
        }} >
            <div className='py-5'>
                <h2 className='text-primary text-center text-2xl'>Contact Us</h2>
                <h1 className='text-center text-4xl text-gray-300'>Stay connected with us</h1>
            </div>
            <div className='my-3'>
                <form className='flex flex-col items-center pb-5'>
                    <input type="text" placeholder="Email Address" className="mb-3 input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Subject" className="mb-3 input input-bordered w-full max-w-xs" />
                    <textarea type="text" placeholder="Your message" className="mb-3 input input-bordered w-full max-w-xs" />
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;