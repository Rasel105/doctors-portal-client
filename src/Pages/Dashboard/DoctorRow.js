import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
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
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;