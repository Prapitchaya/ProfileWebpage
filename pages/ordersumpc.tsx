import Image from 'next/image'
import iconmusic from '../public/icon-music.svg'
import illustrationhero from '../public/illustration-hero.svg'
import backgrounddesktop from '../public/pattern-background-desktop.svg'
import backgroundmobile from '../pattern-background-desktop.svg'

export default function Home() {
    return (
        <div className="grid h-screen w-screen bg-[#e0e8ff] items-center justify-center">
            <div className="flex flex-col h-[28rem] w-[16.5rem] rounded-[1rem] items-center shadow-2xl shadow-[#bbcafc] bg-white">
                <Image className='rounded-t-[1rem]' src={illustrationhero} alt="" />
                <div className='flex flex-col gap-4 h-[full] w-5/6 mt-5 items-center font-redhatdisplay text-center'>
                    <div className='text-[#1f2f56] font-black text-[18px]'>Order Summary</div>
                    <div className='text-[#7280a7] font-medium text-[12px] w-[13rem]'> You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</div>
                    <div className='flex items-center justify-center gap-5 text-[11px] font-bold w-full h-16 rounded-lg bg-[#f8f9fe]'>
                        <div className='bg-[#dfe5fc] rounded-full h-9 w-9'><Image className='' src={iconmusic} alt="" /></div>
                        <div className='mr-4'>
                            <div className='text-[#1f2f56] font-black h-1/2'>Annual Plan</div>
                            <div className='text-[#7280a7] font-medium h-1/2'>$59.99/year</div>
                        </div>
                        <div className='text-[#3829e0] text-[10.5px] underline hover:text-[#766cf1] hover:no-underline cursor-pointer'>Change</div>
                    </div >
                    <div className='flex items-center justify-center text-white text-[12px] font-bold w-full h-10 rounded-lg shadow-xl shadow-[#c5bbfc] bg-[#3829e0] hover:bg-[#766cf1] cursor-pointer'>Proceed to Payment</div>
                    <div className='flex items-center justify-center text-[#7280a7] font-bold text-[12px] w-full h-6 '>
                        <div className='cursor-pointer h-3 hover:text-[#1f2f56]'>Cancel Order</div>
                    </div>
                </div>

            </div>
        </div>
    )
}