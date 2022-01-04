import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({buttonTitle}) => {
    return (
        <button className={classes.myBtn}>
            {buttonTitle}
        </button>
    );
};

export default MyButton;