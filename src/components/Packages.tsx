import { packagesInfo } from '@/data/packagesInfo';
import Image from 'next/image';

export default function Packages() {
   return (
      <section
         id="packages"
         className="flex-col items-center"
      >
         <div className="text-center max-w-300 mb-10">
            <h1>OUR PACKAGES</h1>
            <h2 className="text-4xl lg:text-[3.2rem]">Discover our exceptional selection of travel packages and destinations.</h2>
         </div>

         <div className="cardContainer text-white">
            {packagesInfo.map((packageItem, id) => (
               <div key={id} className="packageCard relative">
                  <span className="text-sm">{packageItem.time}</span>
                  <Image
                     src={packageItem.src}
                     alt={packageItem.alt}
                     fill
                     objectFit="cover"
                     className="brightness-70 rounded-2xl"
                  />
                    <div>
                      <h3 className="text-xl font-bold">{packageItem.header}</h3>
                      <p>{packageItem.description}</p>
                    </div>
               </div>
            ))}
         </div>
      </section>
   )
}
