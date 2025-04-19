import Image from 'next/image';
import heroImage from '../../public/heroImage.webp';
import { MapPinned } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import ExploreBarDesktop from './ui/ExploreBarDesktop';
import ExploreBarMobile from './ui/ExploreBarMobile';
import Header from './ui/Header';

export default function Hero() {
   return (
      <main className="relative flex justify-center w-full h-dvh text-white">
         <Header />
         <Image
            src={heroImage}
            placeholder='blur'
            layout="fill"
            objectFit="cover"
            className="rounded-[25] border-5 md:rounded-[35] md:border-15"
            alt="Image of the Empire State Building in New York City"
         />

         <div className="absolute inset-0 bg-black/50 rounded-[25] border-5 md:rounded-[35] md:border-15" />

         <div className="absolute flex flex-col items-center text-center top-70 w-90 text-2xl sm:w-150 sm:text-4xl lg:w-200 lg:text-5xl md:top-85 font-semibold">
            <span>Begin your dream journey with our expert guidance and support</span>
         </div>

         <ExploreBarDesktop />
         <ExploreBarMobile />

         <div className="absolute bottom-8 left-5 text-sm w-70 sm:bottom-10 sm:left-10 md:w-100 lg:w-140 md:text-base">
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 mb-2 rounded-full border">
               <MapPinned className='size-4 md:size-5'/>
               <span>New York, USA</span>
            </div>
            <span>Book your travel and transportation service with us and enjoy a hassel-free and memorable journey.</span>
         </div>

          <div className="hidden sm:block">
            <a
               href="#about"
               className='absolute flex items-center gap-2 bottom-12 right-12 px-6 py-3 rounded-full border hover:bg-white hover:text-black duration-200 ease'
            >
               <span>Explore more</span>
               <ArrowDown />
            </a>
          </div>
      </main>
   )
}