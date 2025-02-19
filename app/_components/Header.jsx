"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
const Header = () => {
    const { user } = useUser()
    return (
        <div className='px-10 lg:px-32 xl:px-48 2xl-56 p-4 w-full flex justify-between items-center shadow-sm '>
            <Link href="/">
                <Image src={'/logo.svg'} alt='logo' width={180} height={100}></Image>
            </Link>

            <div className='flex gap-2'>
                {user ? <Link href="/dashboard" >
                    <Button variant="outline">Dashboard</Button>
                </Link>
                    :
                    <Button>Get started</Button>
                }
                <UserButton />
            </div >
        </div >
    )
}

export default Header