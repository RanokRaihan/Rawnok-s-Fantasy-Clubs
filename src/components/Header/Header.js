import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className='main-header'>
            {
                //dynamic data for header component
                props.content
            }
        </div>
    );
};

export default Header;