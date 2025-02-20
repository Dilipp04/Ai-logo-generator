"use client"
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { db } from '@/configs/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const LogoList = () => {
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    const [logoList, setLogoList] = useState()

    useEffect(() => {
        userDetail && GetUserLogos()
    }, [userDetail])

    const GetUserLogos = async () => {
        const querySnapShot = await getDocs(collection(db, "users", userDetail?.email, "logos"))
        setLogoList([])
        querySnapShot.forEach((doc) => {
            setLogoList(prev => [...prev, doc.data()])
        })
    }

    const ViewLogo = (image) => {
        const imageWindow = window.open()
        imageWindow.document.write(`<img style="height:100vh;" src="${image}" alt="Base64 image"/>`)

    }
    return (
        <div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 '>
                {
                    logoList?.length > 0 ? logoList.map((logo, index) => (
                        <div key={index} className='hover:scale-105 transition-all cursor-pointer'
                            onClick={() => ViewLogo(logo?.image)}>
                            <Image src={logo.image} alt={logo.title} width={200} height={200} className='w-full rounded-xl' />
                            <h2 className='text-center font-bold text-lg mt-2'>{logo?.title}</h2>
                            <p className='text-center text-sm text-gray-500'>{logo?.desc}</p>
                        </div>
                    ))
                        :
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className='bg-slate-200 animate-pulse rounded-xl w-full h-[200px]'>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default LogoList