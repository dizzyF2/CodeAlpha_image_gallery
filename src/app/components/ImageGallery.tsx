'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import { Images, ImagesFilter } from '../constants'
import { ChevronLeft, ChevronRight, CircleXIcon } from 'lucide-react';



function ImageGallery() {

    const [slide, setSlide] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [image, setImage] = useState(Images);
    



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

    const filterItem = (fil:string) =>{
            const update = Images.filter((e) =>{
                return e.category === fil
            })
            setImage(update)
        }
        

    return (
        <div className='flex flex-col items-center gap-8 p-24'>
            {/* Filters */}
            <>
                <div className="flex flex-wrap justify-center p-3 gap-3 gap-y-8 gap-x-3 m-1 mt-4">
                    <button onClick={()=>setImage(Images)} className="cursor-pointer hover:opacity-100 hover:font-bold hover:tracking-[0.6px] p-2 hover:border hover:border-solid hover:border-blue-300 hp-1 font-semibold bg-[#24252e] text-white text-center text-[1.05rem] capitalize opacity-50 rounded-md duration-200 w-36">All</button>
                    {ImagesFilter.map((item:any)=>(
                        <button
                        key={item.key}
                        onClick={() => filterItem(item.filter)}
                        className="cursor-pointer hover:opacity-100 hover:font-bold hover:tracking-[0.6px] p-2 hover:border hover:border-solid hover:border-blue-300 hp-1 font-semibold bg-[#24252e] text-white text-center text-[1.05rem] capitalize opacity-50 rounded-md duration-200 w-36"
                        >
                            {item.filter}
                        </button>
                    ))}
                </div>
            </>
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
            {/* Images */}
            <div className='flex flex-wrap justify-center gap-2'>
                {image.map((item:any, index:any)=>{
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
        </div>
    )
    }

export default ImageGallery