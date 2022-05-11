import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className='text-center text-xl text-secondary'>Available Appointments on {format(date, 'PP')}</h2>
            <div>
                {
                       
                }
            </div>
        </div>
    );
};

export default AvailableAppoinments;