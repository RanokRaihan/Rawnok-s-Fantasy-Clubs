import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h3 className='error-msg'>Error:404</h3>
            <h2 className='error-msg'>page not found</h2>
        </div>
    );
};

export default NotFound;