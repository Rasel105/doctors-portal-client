import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'PP');
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
            patient: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value
        }

        console.log(booking);

        fetch("https://still-meadow-05809.herokuapp.com/booking", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    toast(`Appoinment is set, ${formatedDate} at ${slot}`);
                } else {
                    toast.error(`You already have an Appoinment on ${data.booking?.date} at ${data.booking?.slot}`);
                }

                // to close the modal 
                refetch()
                setTreatment(null);
            });

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                        <input type="text" name='date' defaultValue={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    defaultValue={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name='name' disabled defaultValue={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled defaultValue={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your phone" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" defaultValue='Submit' className="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;