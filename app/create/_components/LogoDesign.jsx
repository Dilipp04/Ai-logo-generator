import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import LogoDesig from '@/app/_data/LogoDesig'
import Image from 'next/image'

const LogoDesign = ({ onHandleInputChange, formData }) => {
    const [selectedOption, setSelectedOption] = useState(formData?.design?.title)
    return (
        <div>
            <HeadingDescription title={Lookup.LogoDesignTitle} description={Lookup.LogoDesignDesc} />
            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-5'>
                {
                    LogoDesig.map((design, index) => (
                        <div key={index}
                            onClick={() => { setSelectedOption(design.title); onHandleInputChange(design) }}
                            className={`p-1 cursor-pointer ${selectedOption == design.title && 'border-2 rounded-xl border-primary'}`}
                        >
                            <Image src={design.image} width={300} height={200} alt={design.title}
                                className='w-full rounded-xl h-[150px]  object-cover'
                            />
                            <p className='text-center text-lg mt-3 font-bold'>{design.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LogoDesign