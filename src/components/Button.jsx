import React from 'react';

const Button = ({text}) => {
    return (
        <button
            className='violet-gradient py-2 sm:py-4 px-4 sm:px-6 text-white font-medium rounded-md'
        >
            {text}
        </button>
    );
};

export default Button;