import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = (props) => {
    const { cart } = props;

    // time calculation

    let total = 0;
    for (const sport of cart) {
        total = total + parseInt(sport.time);
    }

    // toastify 

    const notify = () => toast.success("Successfully Done");

    // btn time show
    const times = (id) => {
        const btnId = document.getElementById(id);
        const setTime = btnId.innerText;
        const secondId = document.getElementById('para');
        secondId.innerText = setTime;
        localStorage.setItem('break-time', setTime);
    }

    return (
        <div className='position'>
            <div className='cart'>
                <FontAwesomeIcon className='fa-light fs-1 user' icon={faUser}></FontAwesomeIcon>
                <div className='user-info'>
                    <p className='fw-semibold'>Farjana Yeasmin</p>
                    <p className='location-icon'><FontAwesomeIcon className='location-icon' icon={faLocationDot}></FontAwesomeIcon>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='user-data'>
                <div>
                    <p className='fw-bold'>75 <small>kg</small> </p>
                    <p>Weight</p>
                </div>
                <div>
                    <p className='fw-bold'>6.5</p>
                    <p>Height</p>
                </div>
                <div>
                    <p className='fw-bold'>75 <small>yrs</small> </p>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h5 className='mt-4 ps-3'>Add a Break</h5>
                <div className='break-time'>
                    <div>
                        <p onClick={() => times('btn-time1')} id='btn-time1' className='rounded-circle time'>10s</p>
                    </div>
                    <div>
                        <p onClick={() => times('btn-time2')} id='btn-time2' className='rounded-circle time'>20s</p>
                    </div>
                    <div>
                        <p onClick={() => times('btn-time3')} id='btn-time3' className='rounded-circle time'>30s</p>
                    </div>
                    <div>
                        <p onClick={() => times('btn-time4')} id='btn-time4' className='rounded-circle time'>40s</p>
                    </div>
                    <div>
                        <p onClick={() => times('btn-time5')} id='btn-time5' className='rounded-circle time'>50s</p>
                    </div>
                </div>
            </div>
            <div>
                <h5 className='mt-4 ps-3'>Exercise Details</h5>
                <div className='exercise-details'>
                    <p>Exercise time </p>
                    <p>{total} seconds</p>
                </div>
                <div className='exercise-details'>
                    <p>Break time </p>
                    <p id='para'>0 seconds</p>
                </div>
            </div>
            <div onClick={notify} className='activity'>
                <p>Activity Completed</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Cart;