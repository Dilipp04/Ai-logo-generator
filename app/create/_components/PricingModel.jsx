"use client"
import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

const PricingModel = ({ formData }) => {
    const { user } = useUser()

    useEffect(() => {
        if (formData?.title && typeof window !== 'undefined') {
            localStorage.setItem('formData', JSON.stringify(formData))
        }
    }, [formData])

    return (
        <div>
            <HeadingDescription title={Lookup.LogoPricingModelTitle} description={Lookup.LogoPricingModelDesc} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
                {Lookup?.pricingOption.map((option, index) => (
                    <div key={index} className='flex flex-col p-5 border rounded-xl items-center'>
                        <Image src={option.icon} width={60} height={60} alt={option.title} />
                        <h2 className='font-medium text-2xl'>{option.title}</h2>
                        <div>
                            {
                                option.feature.map((feature, index) => (
                                    <h2 key={index} className='text-lg m-2'>
                                        ⚫ {feature}
                                    </h2>
                                ))
                            }
                        </div>
                        {
                            user ?
                                <Link href={'/generate-logo?type=' + option.title}>
                                    <Button className="mt-3" >{option.button}</Button>
                                </Link>
                                :
                                <SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type=' + option.title} >
                                    <Button className="mt-3">{option.button}</Button>
                                </SignInButton>
                        }
                    </div>
                ))
                }
            </div>
        </div >
    )
}

export default PricingModel