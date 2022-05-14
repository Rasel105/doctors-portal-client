import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'PPP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // const phone = event.target.phone.value;
        // const date = event.target.date.value;
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const treatmentName = treatment.name;
        // console.log(slot, date, name, email, phone, treatmentName);

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/patients', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })

        // to close the modal 
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                        <input type="text" name='date' value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your phone" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value='Submit' className="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;