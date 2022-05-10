import React from 'react';
import doctor from '../../assets/images/doctor.png'

const MakeAppoinment = () => {
    return (
        <section>
            <div>
                <img src={doctor} alt="" />
            </div>
            <div>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2>Make an Appoinment Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur rem maiores fugiat, reiciendis facilis repellendus cupiditate eaque autem, repellat voluptas voluptatum, nisi incidunt. Possimus neque quaerat, distinctio, odio nobis iste facere beatae iusto libero saepe animi, id provident alias?</p>
            </div>
        </section>
    );
};

export default MakeAppoinment;