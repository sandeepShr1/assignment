import React from 'react';
import Loading from './spinner.gif'

const Spinner = () => {
    return (
        <div className='container text-center'>
            <img src={Loading} alt="" />
        </div>
    )
}

export default Spinner