'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import { Images } from '../constants'
import { ChevronLeft, ChevronRight, CircleXIcon } from 'lucide-react';

function ImageGallery() {

    const [slide, setSlide] = useState(0);
    const [showImage, setShowImage] = useState(false);

    const handleShowImage = (index:any) =>{
        setSlide(index);
        setShowImage(true);
    }

    const handleClose = () =>{
        setShowImage(false);
    }

    const prevSlide = () =>{
        slide === 0 ? setSlide(Images.length -1) : setSlide(slide - 1)
    }

    const nextSlide = () =>{
        slide + 1 === Images.length ? setSlide(0) : setSlide(slide + 1)
    }

    return (
        <>
            {showImage &&
                <div className='fixed inset-0 flex flex-col items-center justify-center p-5 gap-2 z-[999] bg-[rgba(0,0,0,0.8)] w-full h-full'>
                    <div className='flex justify-center items-center'>
                        <CircleXIcon className='fixed top-10 right-10 rounded-full text-[rgba(254,44,85,1)] hover:text-white hover:bg-[rgba(254,44,85,1)] cursor-pointer' size={30} onClick={handleClose}/>
                        <ChevronLeft className='fixed top-[50%] left-10 translate-y-[-50%] rounded-full text-[rgba(254,44,85,1)] hover:text-white  hover:bg-[rgba(254,44,85,1)] cursor-pointer' size={30} onClick={prevSlide}/>
                        <ChevronRight className='fixed top-[50%] right-10 translate-y-[-50%] rounded-full text-[rgba(254,44,85,1)] hover:text-white  hover:bg-[rgba(254,44,85,1)] cursor-pointer' size={30} onClick={nextSlide}/>
                    </div>
                    <div className='relative flex items-center justify-center w-[300px] h-[300px] lg:w-[1000px] lg:h-[700px] md:w-[700px] md:h-[500px]'>
                        <Image className="absolute object-cover" src={Images[slide].src} alt={""} fill={true}/>
                    </div>
                </div>
            }
            <div className='flex flex-wrap justify-center gap-2'>
                {Images.map((item:any, index:any)=>{
                    return(
                        <div key={index} className="relative overflow-hidden h-64 w-[400px] " onClick={()=>handleShowImage(index)}>
                        <Image 
                            className="absolute object-cover rounded-xl hover:opacity-70 hover:scale-95 hover:cursor-pointer duration-300 ease-in-out hover:border-2 hover:border-[#E7E7E6]" 
                            loading='lazy' 
                            src={item.src} 
                            alt={item.name} 
                            fill={true}
                        />
                    </div>
                    )
                })}
            </div>
        </>
    )
    }

export default ImageGallery