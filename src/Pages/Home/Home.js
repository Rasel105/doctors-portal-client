import React from 'react';
import OurServices from './Services';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Testimonials from './Testimonials';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <OurServices />
            <MakeAppoinment />
            <Testimonials />
            <ContactUs /> 
            <Footer/>
        </div>
    );
};

export default Home;