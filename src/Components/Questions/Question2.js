import React from 'react';

const Question2 = () => {
    return (
        <div className='first-question text-center m-5'>
            <h3>Difference between <span className='text-success'>Props</span> and <span className='text-success'>State</span>?</h3>
            <p>While both hold information that influences the output of render, they are different in one important way: <span className='fw-semibold'>props get passed to the component</span> (similar to function parameters) whereas <span className='fw-semibold'> state is managed within the component</span> (similar to variables declared within a function).</p>
        </div>
    );
};

export default Question2;