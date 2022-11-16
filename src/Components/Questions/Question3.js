import React from 'react';

const Question3 = () => {
    return (
        <div className='first-question text-center m-5'>
            <h3>What is the use of <span className='text-success'> UseEffect</span> other than loading data?</h3>
            <p><span className='fw-semibold'>Validating an input while it's receiving characters</span> is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.</p>
        </div >
    );
};

export default Question3;