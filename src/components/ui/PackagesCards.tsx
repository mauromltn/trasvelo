'use client';
import { packagesData } from '@/data/packagesData';
import Image from 'next/image';
import { toast } from 'sonner';
import SonnerContent from './SonnerContent';

export default function PackagesCards() {
   return (
      <div className="flex flex-col lg:flex-row cardContainer text-white">
         {packagesData.map((packageItem, id) => (
            <div key={id} className="packageCard relative">
               <span className="blurDiv text-xs md:text-sm py-2 px-2.5">5 days, 4 nights</span>
               <Image
                  src={packageItem.src}
                  alt={packageItem.alt}
                  fill
                  objectFit="cover"
                  className="brightness-75 rounded-2xl"
               />
               <div className='flex justify-between items-center'>
                  <div>
                     <h3 className="text-[1.3rem] font-medium md:font-normal md:text-2xl mb-1 md:mb-0">{packageItem.header}</h3>
                     <p className='max-w-80 text-sm md:text-base font-light'>{packageItem.description}</p>
                  </div>

                  <div className='buttonContainer absolute bottom-27.5 md:bottom-30 xl:bottom-10 xl:right-10 scale-100 lg:scale-0 duration-300 ease'>
                     <button
                        onClick={() => toast(<SonnerContent />)}
                        className='blurDiv packageButton py-2.5 px-4 md:px-6 text-sm md:text-vase font-light cursor-pointer'
                     >
                        Choose package
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}
