import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-white text-4xl'>Make an Appoinment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur rem maiores fugiat, reiciendis facilis repellendus cupiditate eaque autem, repellat voluptas voluptatum, nisi incidunt. Possimus neque quaerat, distinctio, odio nobis iste facere beatae iusto libero saepe animidd, id provident alias?</p>
                <PrimaryButton>Make an Appoinment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;