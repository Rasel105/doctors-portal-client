import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className='text-center text-xl text-secondary my-10'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    />)
                }
                {
                    treatment && <BookingModal
                        setTreatment={setTreatment}
                        date={date}
                        treatment={treatment} />
                }
            </div>
        </div>
    );
};

export default AvailableAppoinments;