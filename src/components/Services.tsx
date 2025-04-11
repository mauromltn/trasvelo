import Image from 'next/image';
import destination from '../../public/destination.jpg';
import advice from '../../public/advice.jpg';
import support from '../../public/support.jpg';

export default function Services() {
   return (
      <section
         id="services"
         className="flex-col items-start"
      >
         <div>
            <h1>OUR SERVICES</h1>
            <h2 className="text-[3.5rem] font-light">Explore endless options with our service</h2>
            <p className="w-200 text-lg mb-10">
               Discover a myriad of choices available through our service, offering
               limitless possibilities for your exploration and enjoyment.
            </p>
         </div>

         <div className="grid grid-cols-2 gap-5 w-full text-white">
            <div className='gridItem row-span-2'>
               <Image
                  src={destination}
                  alt='Image of a beautiful destination'
                  placeholder='blur'
                  fill
                  objectFit='cover'
                  className='rounded-2xl'
               />
               <h3>Diverse Destinations</h3>
               <p>Access to a wide range of domestic and international locations.</p>
            </div>
            <div className='gridItem'>
               <Image
                  src={advice}
                  alt='Image of travel advice'
                  placeholder='blur'
                  fill
                  objectFit='cover'
                  objectPosition='bottom'
                  className='z-0 rounded-2xl'
               />
               <h3>Expert Travel Advice</h3>
               <p>Tips and guides to enhance your travel experience.</p>
            </div>
            <div className='gridItem'>
               <Image
                  src={support}
                  alt='Image of travel support'
                  placeholder='blur'
                  fill
                  objectFit='cover'
                  objectPosition='bottom'
                  className='z-0 rounded-2xl'
               />
               <h3>Comprehensive Travel Support</h3>
               <p>24/7 customer service to assist you before, during, and after your trip.</p>
            </div>
         </div>
      </section>
   )
}
