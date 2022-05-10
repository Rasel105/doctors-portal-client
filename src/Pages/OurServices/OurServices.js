import React from 'react';
import '../../assets/icons/clock.svg'
import ServicesCard from './ServicesCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const OurServices = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-primary text-center text-2xl'>OUR SERVICES</h1>
                <h3 className='text-center text-2xl'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-12'>
                <ServicesCard serviceTitle="Fluoride Treatment" img={fluoride}/>
                <ServicesCard serviceTitle="Cavity Filling" img={cavity}/>
                <ServicesCard serviceTitle="Teeth Whitening" img={whitening}/>
            </div>
        </div>
    );
};

export default OurServices;