import React from 'react';
import OurServices from './Services';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Testimonials from './Testimonials';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <OurServices />
            <MakeAppoinment />
            <Testimonials />
            <ContactUs/>
        </div>
    );
};

export default Home;