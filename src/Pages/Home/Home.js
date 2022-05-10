import React from 'react';
import OurServices from '../OurServices/OurServices';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info/>
            <OurServices/>
        </div>
    );
};

export default Home;