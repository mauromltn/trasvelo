import { packagesInfo } from '@/data/packagesInfo';
import Image from 'next/image';

export default function Packages() {
   return (
      <section
         id="packages"
         className="flex-col items-center"
      >
         <div className="text-center max-w-300 lg:mb-10">
            <h1>OUR PACKAGES</h1>
            <h2 className="text-4xl lg:text-[3.2rem]">Discover our exceptional selection of travel packages and destinations.</h2>
         </div>

         <div className="flex flex-col lg:flex-row cardContainer text-white">
            {packagesInfo.map((packageItem, id) => (
               <div key={id} className="packageCard relative">
                  <span className="blurDiv text-sm py-2 px-2.5">5 days, 4 nights</span>
                  <Image
                     src={packageItem.src}
                     alt={packageItem.alt}
                     fill
                     objectFit="cover"
                     className="brightness-75 rounded-2xl"
                  />
                  <div className='flex justify-between items-center'>
                      <div>
                        <h3 className="text-2xl">{packageItem.header}</h3>
                        <p className='max-w-80 font-light'>{packageItem.description}</p>
                      </div>

                      <div className='packageButton absolute bottom-30 md:bottom-35 lg:bottom-30 xl:bottom-10 xl:right-10 scale-100 lg:scale-0 duration-300 ease'>
                        <button className='blurDiv py-2.5 px-6 font-light cursor-pointer'>Choose package</button>
                      </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}
