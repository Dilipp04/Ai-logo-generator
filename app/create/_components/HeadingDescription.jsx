import React from 'react'

const HeadingDescription = ({ title, description }) => {
    return (
        <div>
            <h2 className='font-bold text-primary text-3xl'>{title}</h2>
            <p className='text-lg text-gray-500 mt-2'>{description}</p>
        </div>
    )
}

export default HeadingDescription