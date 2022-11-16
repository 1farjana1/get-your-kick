import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const sport of cart) {
        total = total + parseInt(sport.time);
    }

    const notify = () => toast.success("Successfully Done")

    return (
        <div className='position'>
            <div className='cart'>
                <FontAwesomeIcon className='fa-light fs-1 icon' icon={faUser}></FontAwesomeIcon>
                <div className='user-info'>
                    <p className='fw-semibold'>Farjana Yeasmin</p>
                    <p className='location-icon'><FontAwesomeIcon className='location-icon' icon={faLocationDot}></FontAwesomeIcon> Dhaka,Bangladesh</p>
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
                        <p className='rounded-circle'>10s</p>
                    </div>
                    <div>
                        <p className='rounded-circle'>20s</p>
                    </div>
                    <div>
                        <p className='rounded-circle'>30s</p>
                    </div>
                    <div>
                        <p className='rounded-circle'>40s</p>
                    </div>
                    <div>
                        <p className='rounded-circle'>50s</p>
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
                    <p id='second'>{ } seconds</p>
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