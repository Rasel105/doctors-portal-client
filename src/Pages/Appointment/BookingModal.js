import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const date = event.target.date.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        console.log(slot, date, name, email, phone);
        const data = {
            slot, date, name, email, phone
        }

        fetch('http://localhost:5000/patients', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">

                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                        <input type="text" name='date' value={format(date, 'PP')} disabled class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email address" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your phone" class="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value='Submit' class="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;