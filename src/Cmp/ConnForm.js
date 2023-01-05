import React from 'react';
import './ConnForm.css';

const ConnForm = () => {
    return (
        <form method='post'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Phone' />
            <input type="text" placeholder='State' />
            <textarea type="text" placeholder='Option Comment' />
            <button type='Submit'>Submit</button>
        </form>
    )
}

export default ConnForm