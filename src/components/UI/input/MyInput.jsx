import React from 'react';

import cl from './MyInput.module.css'; 

const MyInput = (props) => {
    return (
        <input className="inp" {...props} />
    );
};

export default MyInput;