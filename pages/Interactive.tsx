import Image from 'next/image'
import iconstar from '../public/Interactive/icon-star.svg'
import illust from '../public/Interactive/illustration-thank-you.svg'
import React from 'react'
import { useState } from 'react'
import handler from './api/hello';

const Home = () => {

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className='flex justify-center items-center h-screen w-screen '>
            <div className='flex justify-center items-center w-[375px] h-[667px] lg:w-[1440px]  lg:h-full font-overpass bg-[#141519]'>
                <div className='flex justify-center items-center w-[20.5rem] h-[22.5rem] lg:w-[25.5rem] lg:h-[25.5rem] rounded-2xl lg:rounded-[1.75rem] bg-gradient-to-b from-[#1f2630] to-[#171e28]'>
                    <div className={!show ? "flex-col w-[17.5rem] h-[19.5rem] lg:w-[21.5rem] lg:h-[21.5rem]" : "hidden"}>
                        <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#262f38] mb-4 lg:mb-7">
                            <Image className='h-[14px] w-[14px] lg:h-4 lg:w-4' src={iconstar} alt="" /></div>
                        <div className=" flex justify-center flex-col h-fit w-full text-white font-semibold text-[24px] lg:text-[28px] mb-2 lg:mb-0 ">
                            How did we do?
                        </div>
                        <div className="flex items-center justify-center h-16 lg:h-20 w-full text-[#959eac] font-normal text-[14px] lg:text-[15px] mb-8 lg:mb-6 leading-[1.375rem] lg:leading-[1.5rem]">
                            Please let us know how we did with your support request.
                            All feedback is appreciated
                            to help us improve our offering!
                        </div>
                        <div className="flex flex-row gap-5 h-10 lg:h-14 w-full text-[#7c8798] text-[14px] lg:text-[17px] font-semibold mb-4 lg:mb-[1.825rem] ">
                            <button onClick={() => setIndex(1)} className='flex items-center justify-center h-10 w-10 lg:h-[3.25rem] lg:w-[3.25rem] bg-[#262f38] hover:text-white hover:bg-[#fb7413] focus:bg-[#7c8798] focus:text-white rounded-full'><div className='h-[16px] lg:h-[20px]'>1</div></button>
                            <button onClick={() => setIndex(2)} className='flex items-center justify-center h-10 w-10 lg:h-[3.25rem] lg:w-[3.25rem] bg-[#262f38] hover:text-white hover:bg-[#fb7413] focus:bg-[#7c8798] focus:text-white rounded-full'><div className='h-[16px] lg:h-[20px]'>2</div></button>
                            <button onClick={() => setIndex(3)} className='flex items-center justify-center h-10 w-10 lg:h-[3.25rem] lg:w-[3.25rem] bg-[#262f38] hover:text-white hover:bg-[#fb7413] focus:bg-[#7c8798] focus:text-white rounded-full'><div className='h-[16px] lg:h-[20px]'>3</div></button>
                            <button onClick={() => setIndex(4)} className='flex items-center justify-center h-10 w-10 lg:h-[3.25rem] lg:w-[3.25rem] bg-[#262f38] hover:text-white hover:bg-[#fb7413] focus:bg-[#7c8798] focus:text-white rounded-full'><div className='h-[16px] lg:h-[20px]'>4</div></button>
                            <button onClick={() => setIndex(5)} className='flex items-center justify-center h-10 w-10 lg:h-[3.25rem] lg:w-[3.25rem] bg-[#262f38] hover:text-white hover:bg-[#fb7413] focus:bg-[#7c8798] focus:text-white rounded-full'><div className='h-[16px] lg:h-[20px]'>5</div></button>
                        </div>
                        <button onClick={handleShow} className="flex h-11 w-full text-white bg-[#fb7413] hover:bg-white hover:text-[#fb7413] items-center justify-center rounded-3xl font-semibold text-[14px] tracking-[0.12em] ">
                            <span className='inline-block h-[16px] align-middle'>SUBMIT</span>
                        </button>
                    </div>
                    {show ? <div className='flex flex-col gap-1 items-center justify-center w-[17rem] h-[18.25rem] lg:w-[21rem] lg:h-[20rem] text-center'>
                        <div className='flex h-fit w-full items-center justify-center'>
                            <Image className='h-24 lg:h-28 w-auto object-cover' src={illust} alt="" />
                        </div>
                        <div className='flex h-8 w-40 lg:w-[12rem] items-center justify-center rounded-full bg-[#26323d] text-[#c87d49] text-[14px] lg:text-[15px] font-normal mt-6 mb-6 lg:mt-7 lg:mb' >
                            <div className='w-auto h-4 lg:h-5 text-center items-center justify-center'>You selected {index} out of 5</div>
                        </div>
                        <div className='flex h-fit w-full item-center justify-center text-white text-[24px] lg:text-[28px] font-semibold'>
                            <div className='h-7 lg:h-9'>Thank you!</div>
                        </div>
                        <div className='flex h-fit w-full item-center justify-center text-[#7c8798] text-[14px] lg:text-[15px] text-center font-normal mt-[1.125rem] lg:mt-2 leading-[1.375rem] lg:leading-[1.5rem]'>
                            <div>We appreciate you taking the time to give a rating. If you ever need more support,
                                don’t hesitate to get in touch!</div>
                        </div>
                    </div> : <></>}

                </div>
            </div>
        </div>
    )
}
export default Home;