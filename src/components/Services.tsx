import Image from 'next/image';
import { servicesData } from '@/data/servicesData';

export default function Services() {
   return (
      <section id="services" className="flex-col mb-24">
         <div>
            <h1>OUR SERVICES</h1>
            <h2 className="text-4xl lg:text-[3.2rem]">Explore endless options with our service</h2>
            <p className="md:text-lg md:mb-10">
               Discover a myriad of choices available through our service, offering
               limitless possibilities for your exploration and enjoyment.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full text-white">
            {servicesData.map((service, id) => (
               <div key={id} className={`gridItem ${service.rowSpan}`}>
                  <Image
                     src={service.src}
                     alt={service.alt}
                     fill
                     objectFit="cover"
                     placeholder='blur'
                     className="brightness-80 rounded-2xl"
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
               </div>
            ))}
         </div>
      </section>
   );
}
