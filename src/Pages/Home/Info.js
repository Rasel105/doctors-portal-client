import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}/>
            <InfoCard bgclass="bg-[#3A4256]" cardTitle="Visit our location" img={marker} style={{ backgroundColor: 'bg-primary' }}/>
            <InfoCard bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" img={phone}/>
        </div>
    );
};

export default Info;