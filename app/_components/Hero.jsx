import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
    const [logoTitle, setLogoTitle] = useState()

    return (
        <div className='flex flex-col mt-24 items-center gap-5'>
            <h2 className='text-primary text-5xl font-bold text-center'>{Lookup.HeroHeading}</h2>
            <h2 className='text-5xl font-bold text-center'>{Lookup.HeroSubHeading}</h2>
            <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

            <div className='flex gap-6 w-full max-w-2xl mt-10'>
                <input onChange={(evenv) => setLogoTitle(event?.target.value)} placeholder={Lookup.InputTitlePlaceHolder} className='p-3 border rounded-md shadow-md w-full' />
                <Link href={"/create?title=" + logoTitle}>
                    <Button className="p-6 w-full">Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero