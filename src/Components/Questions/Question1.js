import React from 'react';

const Question1 = () => {
    return (
        <div className='first-question text-center mt-5'>
            <h3>How does <span className='text-success'>React</span> works?</h3>
            <p> <span className="fw-semibold">React creates a VIRTUAL DOM in memory.</span> Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
            <p><span className="fw-semibold">React only changes what needs to be changed..</span>React finds out what changes have been made, and changes only what needs to be changed.</p>
        </div>
    );
};

export default Question1;