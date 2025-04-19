import { footerLinks } from '@/data/footerLinks'

export default function Footer() {
   return (
      <section className="flex flex-col gap-5 p-10 bg-neutral-900 text-white border-15 border-t-0 rounded-b-[35]">
         <div className="flex justify-between">
            <div className="flex flex-col w-80 gap-5">
               <span className="text-4xl font-medium">trasvelo</span>
               <p className="text-sm">Experience personalized healthcare from the comfort of your home with our advanced telemedicine services.</p>

               <div className="flex gap-3 mt-4">
                  <a href="https://wa.me/trasvelo" target="_blank" rel="noopener noreferrer">
                     <img src="/footer/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/trasvelo/" target="_blank" rel="noopener noreferrer">
                     <img src="/footer/instagram.svg" alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href="https://www.youtube.com/channel/trasvelo" target="_blank" rel="noopener noreferrer">
                     <img src="/footer/youtube.svg" alt="YouTube" className="w-6 h-6" />
                  </a>
               </div>
            </div>

            <div className="">
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
                  {footerLinks.map((section, idx) => (
                     <div key={idx}>
                        <h3 className="text-white font-semibold mb-7">{section.title}</h3>
                        <ul className="space-y-5">
                           {section.links.map((link, i) => (
                              <li key={i}>
                                 <a href="#" className="text-gray-400 hover:text-white transition">{link}</a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <hr className="w-full h-px bg-white my-5 m-auto" />

         <div className="pb-2">
            <p className="text-sm">
               &copy; {new Date().getFullYear()} Trasvelo. All rights reserved.
            </p>
         </div>
      </section>
   )
}
