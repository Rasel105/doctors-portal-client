import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');
    const { isLoading, error, data: services, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate, treatment])


    return (
        <div>
            <h2 className='text-center text-xl text-secondary my-10'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    />)
                }
                {
                    treatment && <BookingModal
                        setTreatment={setTreatment}
                        date={date}
                        refetch={refetch}
                        treatment={treatment} />
                }
            </div>
        </div>
    );
};

export default AvailableAppoinments;