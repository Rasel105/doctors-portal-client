import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ForgetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');

    let signInError;
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    if (sending) {
        return <Loading />
    }

    const resetPassword = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Please check your email.")
        }
        else {
            toast.error("Please type your email.")
        }
    }

    return (
        <div class="card w-1/3 mx-auto bg-base-100 shadow-xl mt-10">
            <div class="card-body">
                <h2 class="card-title">Find Your Account</h2>
                <hr className='w-full border-2 rounded-lg' />
                <p>Please enter your email address to search for your account.</p>
                <form onSubmit={resetPassword}>
                    <input ref={emailRef} type="email" placeholder="Email address" class="input mb-2 input-bordered input-secondary w-full max-w-xs" />
                    {signInError}
                    <hr className='w-full border-2 rounded-lg mb-2 mt-3' />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary text-white">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;