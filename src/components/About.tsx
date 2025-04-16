import Divider from "./ui/Divider"

export default function About() {
   return (
      <section
         id="about"
         className="items-center justify-between"
      >
         <div className="lg:w-160 font-light">
            <h1>ABOUT US</h1>
            <p className="text-2xl lg:text-4xl">
               We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
               <span className="text-secondary"> Our mission is to provide you with the best travel experiences.</span>
            </p>
         </div>

         <div className="flex items-center justify-center text-center w-full h-10 gap-3 text-2xl md:w-140 md:h-15 md:gap-6 md:text-4xl">
            <div>
               <span>200+</span>
               <p className="text-tertiary text-sm lg:text-base">Happy Customers</p>
            </div>

            <Divider className="bg-secondary h-1/2" />
            
            <div>
               <span>65+</span>
               <p className="text-tertiary text-sm lg:text-base">Top Hotels</p>
            </div>

            <Divider className="bg-secondary h-1/2" />
            
            <div>
               <span>250+</span>
               <p className="text-tertiary text-sm lg:text-base">Experienced Guide</p>
            </div>
         </div>
      </section>
   )
}
