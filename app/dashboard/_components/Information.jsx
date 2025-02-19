"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'


const Information = () => {
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    return (
        <>

            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl text-primary'>Hello, {userDetail?.name}</h2>
                <div className='flex items-center'>
                    <Image src="/coin.png" alt="coin" width={30} height={30} />
                    <h2 className='text-lg pl-2'>{userDetail?.credits} Credit</h2>
                </div>
            </div>
            <div className='flex justify-between items-center mt-6'>
                <h2 className='font-bold text-2xl'>Dashboard</h2>
                <Link href="/create">
                    <Button>Create New</Button>
                </Link>
            </div>
        </>
    )
}

export default Information