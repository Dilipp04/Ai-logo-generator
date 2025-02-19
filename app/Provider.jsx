"use client"
import React, { useEffect, useState } from 'react'
import Header from './_components/Header'
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import { UserDetailContext } from './_context/UserDetailContext';

const Provider = ({ children }) => {

    const [userDetail, setUserDetail] = useState()

    const { user } = useUser();
    useEffect(() => {
        user && CheckUserAuth()
    }, [user])

    const CheckUserAuth = async () => {
        //Save user to datbase
        const result = await axios.post('/api/user', {
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress?.emailAddress
        })
        setUserDetail(result.data)
    }

    return (
        <div>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
                <Header />
                <div className='px-10 lg:px-32 xl:px-48 2xl-56'>
                    {children}
                </div>
            </UserDetailContext.Provider>
        </div>
    )
}

export default Provider
