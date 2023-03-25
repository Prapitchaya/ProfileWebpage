import Image from 'next/image'
import q from '../public/testmonials/bg-pattern-quotation.svg'
import a from '../public/testmonials/image-daniel.jpg'
import b from '../public/testmonials/image-jonathan.jpg'
import c from '../public/testmonials/image-jeanette.jpg'
import d from '../public/testmonials/image-patrick.jpg'
import e from '../public/testmonials/image-kira.jpg'

export default function Home() {
    return (
            <div className='grid items-center justify-center h-fit w-[21rem] md:h-screen md:w-screen bg-[#edf2f8] '>
                <div className='grid grid-col md:grid-cols-4 md:grid-rows-2 h-fit w-[18rem] md:h-[32rem] md:w-[65rem] font-barlow gap-5 md:gap-8 py-16 md:py-0'>
                    <div className="flex relative items-center justify-center h-fit w-full py-7 px-7 bg-[#733fc8] md:col-span-2 rounded-lg text-white md:order-1 shadow-xl">
                        <Image className='absolute right-5 top-0 z-0' src={q} alt=''/>
                        <div className="flex flex-col h-fit w-full gap-3 z-40">
                            <div className="flex h-[2rem] w-fit gap-3">
                                <div className="h-full w-[2rem] rounded-full "><Image className='rounded-full border' src={a} alt=''/></div>
                                <div className='flex flex-col'>
                                    <div className="text-[12px]">Daniel Clifford</div>
                                    <div className="text-[10px] opacity-50">Verified Graduate</div>
                                </div>
                            </div>
                            <div className="flex flex-col h-fit w-full gap-3 leading-[1.3rem]">
                                <div className="h-fit text-[18px] font-medium tracking-wide">I received a job offer mid-course, and the subjects I learned were current, if not more so,
                                    in the company I joined. I honestly feel I got every penny’s worth.</div>
                                <div className="h-fit text-[12px] opacity-70 leading-4 font-normal">
                                    “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                                    transition and have heard some people who had an amazing experience here. I signed up
                                    for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                                    The next 12 weeks was the best - and most grueling - time of my life. Since completing
                                    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-fit w-full py-7 px-7 bg-[#49556b] md:col-span-1 rounded-lg text-white md:order-2 shadow-xl">
                        <div className="flex flex-col h-fit w-full gap-3 ">
                            <div className="flex h-[2rem] w-fit gap-3">
                                <div className="h-full w-[2rem] rounded-full"><Image className='rounded-full border' src={b} alt=''/></div>
                                <div className='flex flex-col'>
                                    <div className="text-[12px]">Jonathan Walters</div>
                                    <div className="text-[10px] opacity-50">Verified Graduate</div>
                                </div>
                            </div>
                            <div className="flex flex-col h-fit w-full gap-3 leading-[1.3rem]">
                                <div className="h-fit text-[18px] font-medium tracking-wide">The team was very supportive and kept me motivated.</div>
                                <div className="h-fit text-[12px] opacity-70 leading-4 font-normal">
                                    “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                                    for a big company. This was one of the best investments I’ve made in myself. ”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-fit w-full py-7 px-7 bg-white rounded-lg text-[#515565] md:order-4 shadow-xl">
                        <div className="flex flex-col h-fit w-full gap-3 ">
                            <div className="flex h-[2rem] w-fit gap-3">
                                <div className="h-full w-[2rem] rounded-full"><Image className='rounded-full border' src={c} alt=''/></div>
                                <div className='flex flex-col'>
                                    <div className="text-[12px]">Jeanette Harmon</div>
                                    <div className="text-[10px] opacity-50">Verified Graduate</div>
                                </div>
                            </div>
                            <div className="flex flex-col h-fit w-full gap-3 leading-[1.3rem]">
                                <div className="h-fit text-[18px] font-medium tracking-wide">An overall wonderful and rewarding experience.</div>
                                <div className="h-fit text-[12px] opacity-70 leading-4 font-normal">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
                                    while doing something I love. ”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-fit w-full py-7 px-7 bg-[#18202d] rounded-lg text-white md:order-5 md:col-span-2 shadow-xl">
                        <div className="flex flex-col h-fit w-full gap-3 ">
                            <div className="flex h-[2rem] w-fit gap-3">
                                <div className="h-full w-[2rem] rounded-full"><Image className='rounded-full border border-[#733fc8]' src={d} alt=''/></div>
                                <div className='flex flex-col'>
                                    <div className="text-[12px]">Patrick Abrams</div>
                                    <div className="text-[10px] opacity-50">Verified Graduate</div>
                                </div>
                            </div>
                            <div className="flex flex-col h-fit w-full gap-3 leading-[1.3rem]">
                                <div className="h-fit text-[18px] font-medium tracking-wide">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
                                    learning from their experiences was easy.</div>
                                <div className="h-fit text-[12px] opacity-70 leading-4 font-normal">
                                    “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
                                    gave me the confidence necessary to be able to go out in the world and present myself as a capable
                                    junior developer. The standard is above the rest. You will get the personal attention you need from
                                    an incredible community of smart and amazing people. ”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-fit w-full py-7 px-7 bg-white rounded-lg text-[#515565] md:order-3 md:row-span-2 shadow-xl">
                        <div className="flex flex-col h-fit w-full gap-3 ">
                            <div className="flex h-[2rem] w-fit gap-3">
                                <div className="h-full w-[2rem] rounded-full"><Image className='rounded-full border' src={e} alt=''/></div>
                                <div className='flex flex-col'>
                                    <div className="text-[12px]">Kira Whittle</div>
                                    <div className="text-[10px] opacity-50">Verified Graduate</div>
                                </div>
                            </div>
                            <div className="flex flex-col h-fit w-full gap-3 leading-[1.3rem]">
                                <div className="h-fit text-[18px] font-medium tracking-wide">Such a life-changing experience. Highly recommended!.</div>
                                <div className="h-fit text-[12px] opacity-70 leading-4 font-normal">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                                    professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                                    student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                                    did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                                    project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                                    could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
                                    experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                                    100% recommend! ”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
