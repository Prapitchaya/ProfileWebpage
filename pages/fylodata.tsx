import Image from 'next/image'
import bgdesktop from '../public/fylodata/bg-desktop.png'
import bgmobile from '../public/fylodata/bg-mobile.png'
import icondocument from '../public/fylodata/icon-document.svg'
import iconfolder from '../public/fylodata/icon-folder.svg'
import iconupload from '../public/fylodata/icon-upload.svg'
import logo from '../public/fylodata/logo.svg'

export default function Home() {
    return (
        <div className='lg:relative flex justify-center items-center h-screen w-screen font-raleway'>
            <div style={{
                backgroundImage: `url(/fylodata/bg-mobile.png)`,
                backgroundRepeat: 'no-repeat',
            }} className='flex justify-center items-center w-[375px] h-[667px] lg:hidden' >
                <div className='flex flex-col gap-4 h-[410px] w-[320px]'>
                    <div className='flex justify-center items-center h-[200px] w-full rounded-xl rounded-tr-[6rem] bg-[#1e2c69]'>
                        <div className='flex flex-col h-[120px] w-[240px] gap-8'>
                            <div>
                                <Image src={logo} alt="" />
                            </div>
                            <div className='flex flex-row gap-4'>
                                <div className='bg-[#0d112c] h-[3rem] w-[3rem] flex justify-center items-center rounded-xl'><Image src={icondocument} alt="" /></div>
                                <div className='bg-[#0d112c] h-[3rem] w-[3rem] flex justify-center items-center rounded-xl'><Image src={iconfolder} alt="" /></div>
                                <div className='bg-[#0d112c] h-[3rem] w-[3rem] flex justify-center items-center rounded-xl'><Image src={iconupload} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-[10rem] w-full rounded-xl bg-[#1e2c69] font-bold'>
                        <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] h-[6.5rem] w-[16.5rem] text-[#dddbff]'>
                            <div className="flex gap-1 h-[1.5rem] w-full items-center justify-center text-center font-normal text-[14px]">
                                You’ve used
                                <span className='font-bold'>815 GB</span>
                                of your storage
                            </div>
                            <div className="flex justify-center items-center h-[2.75rem] w-full">
                                <div className='relative h-[1.25rem] w-full rounded-l-full rounded-r-full bg-[#14204a]'>
                                    <div className='relative left-[0.125rem] top-[50%] translate-y-[-50%] h-[0.875rem] w-[81.5%] rounded-l-full rounded-r-full bg-gradient-to-r from-[#ff9f96] to-[#ff5496]'>
                                        <div className='absolute right-[0.125rem] top-[50%] translate-y-[-50%] h-[0.625rem] w-[0.625rem] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[1.5rem] w-full text-[12px]">
                                <div className='absolute left-0 top-0'>0 GB</div>
                                <div className='absolute right-0 top-0'>1000 GB</div>
                            </div>
                        </div>
                        <div className='absolute flex flex-row gap-3 bottom-[-2.25rem] left-[50%] translate-x-[-50%] h-[4.5rem] w-44 rounded-xl items-center justify-center bg-white'>
                            <div className='text-[2.5rem]'>185</div>
                            <div className='text-[12px] text-[#848794] tracking-wider'>GB LEFT</div>
                        </div>
                    </div>
                </div>
            </div>


            
            <div style={{
                backgroundImage: `url(/fylodata/bg-desktop.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#0c122c',
                backgroundPosition: 'bottom'
            }} className='absolute bottom-0 justify-center items-center w-[1440px] h-[800px] hidden lg:flex' >
                <div className='flex flex-row items-end justify-center gap-7 h-[200px] w-[920px]'>
                    <div className='flex justify-center items-center h-full w-[550px] rounded-lg rounded-tr-[6rem] bg-[#1e2c69]'>
                        <div className='flex flex-col h-[120px] w-[250px] gap-8'>
                            <div>
                                <Image src={logo} alt="" />
                            </div>
                            <div className='flex flex-row gap-4'>
                                <div className='bg-[#0d112c] h-[3rem] w-[3rem] flex justify-center items-center rounded-xl'><Image src={icondocument} alt="" /></div>
                                <div className='bg-[#0d112c] h-[3rem] w-[3rem] flex justify-center items-center rounded-xl'><Image src={iconfolder} alt="" /></div>
                                <div className='bg-[#0d112c] h-[3rem] w-[3rem] flex justify-center items-center rounded-xl'><Image src={iconupload} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-[10rem] bottom-0 w-full rounded-lg bg-[#1e2c69] font-bold'>
                        <div className='absolute flex flex-col items-center justify-center top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] h-[6.5rem] w-[30rem] text-[#dddbff]'>
                            <div className="flex gap-1 h-[1.5rem] w-full items-center font-normal text-[14px]">
                                You’ve used
                                <span className='font-bold'>815 GB</span>
                                of your storage
                            </div>
                            <div className="flex justify-center items-center h-[2.75rem] w-full">
                                <div className='relative h-[1.25rem] w-full rounded-l-full rounded-r-full bg-[#14204a]'>
                                    <div className='relative left-[0.125rem] top-[50%] translate-y-[-50%] h-[0.875rem] w-[81.5%] rounded-l-full rounded-r-full bg-gradient-to-r from-[#ff9f96] to-[#ff5496]'>
                                        <div className='absolute right-[0.125rem] top-[50%] translate-y-[-50%] h-[0.625rem] w-[0.625rem] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[1.5rem] w-full text-[12px]">
                                <div className='absolute left-0 top-0'>0 GB</div>
                                <div className='absolute right-0 top-0'>1000 GB</div>
                            </div>
                        </div>
                        <div className='absolute flex flex-row gap-3 top-[-25%] right-9 h-[4.5rem] w-44 rounded-lg items-center justify-center bg-white'>
                            <div className='text-[2.5rem] '>185</div>
                            <div className='text-[12px] text-[#848794] tracking-wider z-10'>GB LEFT</div>
                            <div className='absolute right-0 bottom-[-30%] z-0 w-0 h-0 border-t-transparent border-r-[50px] border-r-white border-b-[50px] border-b-transparent'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}