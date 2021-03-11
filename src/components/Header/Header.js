import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className='main-header'>
            {
                props.content[0]
            }
        </div>
    );
};

export default Header;