import React from 'react';

const DoctorRow = ({ doctor, index }) => {
    const { name, email, speciality, image } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="avatar">
                    <div class="w-16 rounded-xl">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button class="btn btn-xs btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;