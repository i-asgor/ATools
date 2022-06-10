import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {  handleSubmit } = useForm();
    
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const onSubmit = e =>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email === 'eve.holt@reqres.in' && password === '5cityslicka'){
            toast.success('success')
        }else{
            toast.error('Error')
        }
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body d-grid gap-2">
                    <h1>Welcome Back</h1>
                    <p>Sub-title text goes here</p>
                    <div className="">
                        <input type="email" ref={emailRef} placeholder="Email Address *" className="form-control input input-bordered" required/>
                    </div>
                    <div className="">
                        <input type="password" ref={passwordRef} placeholder="password *" className="form-control input input-bordered" required/>
                        <label className="label">
                        {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                        </label>
                    </div>
                    <div>
                        <button type='submit' className="form-control btn btn-dark">Login</button>
                        <div className='d-flex justify-content-between align-items-center'>
                                
                                <span><input type="checkbox" className='me-1' />Remember Password</span>
                                <a href="/" className='text-decoration-none text-black'>Forget Password?</a>
                        </div>
                    </div>
                </div>
                </form>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;