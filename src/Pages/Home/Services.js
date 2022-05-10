import React from 'react';
import '../../assets/icons/clock.svg'
import ServicesCard from './ServicesCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            descption: "",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            descption: "",
            img: cavity

        },
        {
            _id: 3,
            name: "Teeth Whitening",
            descption: "",
            img: whitening
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className='text-primary text-xl font-bold'>OUR SERVICES</h1>
                <h3 className='text-3xl mt-2'>Services We Provide</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <div class="hero min-h-screen my-28 w-full mx-auto">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:p-20'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;