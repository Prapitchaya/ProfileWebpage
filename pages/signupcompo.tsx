import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import bgdesk from '../public/signup/bg-intro-desktop.png'
import bgmobile from '../public/signup/bg-intro-mobile.png'
import iconerror from '../public/signup/icon-error.svg'

const signupcompo = () => {
    return (
        
        <div className='flex justify-center items-center h-fit w-auto'>
            <div className='flex justify-center items-center bg-[#ff7a7a] bg-signup w-[375px] h-[1000px] lg:w-[1412px] lg:h-[800px] text-white text-center font-poppins'>
                <div className='flex flex-col items-center h-full w-[20rem] pt-[5.5rem]'>
                    <div>
                        <div className='h-[5rem] text-[28px] font-bold leading-snug'>Learn to code by watching others</div>
                        <div className='text-[16px] mt-4 leading-[1.625rem]'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                            but understanding how developers think is invaluable.</div>
                        <div className='flex justify-center items-center h-[5rem] w-full bg-[#5d54a3] rounded-lg mt-16'>
                            <div className=' h-fit w-[12rem]'>
                                <span className='font-semibold '>
                                    Try it free 7 days </span> then $20/mo. thereafter</div>
                        </div>
                    </div>
                    <div className=' h-fit w-full bg-white rounded-lg text-[#3e3c49] mt-6'>
                        <form className='flex flex-col items-center justify-center gap-4 h-fit w-[17rem] m-6 font-semibold'>
                            <input placeholder="First Name" type="text" className='w-full h-[3.5rem] placeholder:text-[#737277] text-[14px] rounded-md px-5 border-[#e5e5e5] border-[1.5px] focus:border-[#3e3c49]' />
                            <input placeholder="Last Name" type="text" className='w-full h-[3.5rem] placeholder:text-[#737277] text-[14px] rounded-md px-5 border-[#e5e5e5] border-[1.5px]' />
                            <input placeholder="Email Address" type="text" className='w-full h-[3.5rem] placeholder:text-[#737277] text-[14px] rounded-md px-5 border-[#e5e5e5] border-[1.5px]' />
                            <input placeholder="Password" type="text" className='w-full h-[3.5rem] placeholder:text-[#737277] text-[14px] rounded-md px-5 border-[#e5e5e5] border-[1.5px]' />
                            <button className='w-full h-[3.5rem] text-white bg-[#38cc8c] font-normal rounded-md'>CLAIM YOUR FREE TRIAL</button>
                            <div className='h-fit w-[15rem] text-[#b9b6d3] text-[11px] font-medium'>By clicking the button, you are agreeing to our <span className='text-[#ff7a7a] font-bold'>Terms and Services</span> </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default signupcompo
