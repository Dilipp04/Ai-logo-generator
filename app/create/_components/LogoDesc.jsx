import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({ onHandleInputChange, formData }) => {
    return (
        <div className='my-10'>
            <HeadingDescription title={Lookup?.LogoDescTitle} description={Lookup?.LogoDescDesc} />
            <input type='text'
                placeholder="Enter the description"
                className='border p-4 mt-5 w-full rounded-lg shadow-md'
                onChange={(e) => onHandleInputChange(e.target.value)}
                value={formData?.desc}
            />
        </div>
    )
}

export default LogoDesc