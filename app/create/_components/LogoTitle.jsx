"use client"
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({ onHandleInputChange, formData }) => {
    const searchParams = useSearchParams()
    const [title, setTitle] = useState(searchParams?.get('title') ?? '')

    return (
        <div className='my-10'>
            <HeadingDescription title={Lookup.LogoTitle} description={Lookup.LogoTitleDesc} />
            <input type='text'
                placeholder={Lookup.InputTitlePlaceHolder}
                className='border p-4 mt-5 w-full rounded-lg shadow-md'
                defaultValue={title}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </div>
    )
}

export default LogoTitle