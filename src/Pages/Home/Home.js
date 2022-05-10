import React from 'react';
import OurServices from './Services';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <OurServices />
            <MakeAppoinment />
        </div>
    );
};

export default Home;