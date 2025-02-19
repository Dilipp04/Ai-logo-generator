"use client"
import React from 'react'
import LogoList from './_components/LogoList'
import Information from './_components/Information'

const dashboard = () => {
    return (
        <div className='mt-20'>
            <Information />
            <LogoList />
        </div>
    )
}

export default dashboard