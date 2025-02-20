"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'
import Prompts from '../_data/Prompts'
import axios from 'axios'
import Image from 'next/image'
import Loader from '../_components/Loader'
import { useSearchParams } from 'next/navigation'

const generateLogo = () => {
    const { userDetail, setUserDetail } = useContext(UserDetailContext)
    const [formData, setFormData] = useState()
    const [Loading, setLoading] = useState(false)
    const [logoImage, setLogoImage] = useState()
    const type = useSearchParams().get("type")

    if (type != "Free") {
        return (
            <>
                <div className="flex justify-center items-center mt-32 text-primary">
                    <h1 className="text-4xl font-bold relative ">
                        Coming Soon<span className="dots"></span>
                    </h1>
                </div>
            </>
        )
    }

    useEffect(() => {
        if (typeof window != undefined && userDetail?.email) {
            const storage = localStorage.getItem('formData')
            if (storage) {
                setFormData(JSON.parse(storage))
            }
        }
    }, [userDetail])

    useEffect(() => {
        if (formData?.title) {
            GenerateAiLogo()
        }
    }, [formData])

    const GenerateAiLogo = async () => {
        setLoading(true)
        const prompt = Prompts.LOGO_PROMPT
            .replace('{logoTitle}', formData?.title)
            .replace('{logoDesc}', formData?.desc)
            .replace('{logoColor}', formData?.palette)
            .replace('{logoIdea}', formData?.idea)
            .replace('{logoDesign}', formData?.design?.title)
            .replace('{logoPrompt}', formData?.design?.prompt)

        const result = await axios.post('/api/ai-logo-model', {
            prompt,
            email: userDetail?.email,
            title: formData?.title,
            desc: formData?.desc
        })

        setLogoImage(result.data?.image)
        setLoading(false)
    }


    return (
        <div className='flex justify-center  '>
            {
                Loading ? <Loader /> :
                    <div className='text-center mt-20'>
                        <Image src={logoImage ? logoImage : "/loading.gif"} alt='Logo' width={400} height={400} />
                        <h2 className='font-bold'>{formData?.title}</h2>
                        <p className='text-s text-zinc-400`'>{formData?.desc}</p>
                    </div>


            }
        </div>
    )
}

export default generateLogo