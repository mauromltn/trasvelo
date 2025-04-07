import Image from 'next/image';
import heroImage from '../../public/heroImage.webp';
import { TbMapPin2 } from 'react-icons/tb';
import { BsArrowDown } from "react-icons/bs";
import ExploreBarDesktop from './ui/ExploreBarDesktop';
import ExploreBarMobile from './ui/ExploreBarMobile';

export default function Hero() {
   return (
      <main className="relative flex justify-center w-full h-dvh text-white">
         <Image
            src={heroImage}
            placeholder='blur'
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-[25] border-5 md:rounded-[35] md:border-8"
            alt="Image of the Empire State Building in New York City"
         />

         <div className="absolute inset-0 bg-black/50 rounded-[25] border-5 md:rounded-[35] md:border-8" />

         <div className="absolute top-70 flex flex-col items-center text-xl font-semibold md:text-5xl md:top-85">
            <span>Begin your dream journey with our</span>
            <span className='md:mt-3.5'>expert guidance and support</span>
         </div>

         <ExploreBarDesktop />
         <ExploreBarMobile />

         <div className="absolute bottom-8 left-5 text-sm w-70 md:bottom-10 md:left-10 md:w-140 md:text-base">
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 mb-2 rounded-full border">
               <TbMapPin2 className='text-base' />
               <span>New York, USA</span>
            </div>
            <span>Book your travel and transportation service with us and enjoy a hassel-free and memorable journey.</span>
         </div>

          <div className="hidden md:block">
            <a
               href="#about"
               className='absolute flex items-center gap-2 bottom-12 right-12 px-6 py-3 rounded-full border hover:bg-white hover:text-black duration-200 ease'
            >
               <span>Explore more</span>
               <BsArrowDown />
            </a>
          </div>
      </main>
   )
}