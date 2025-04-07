import Divider from "./ui/Divider"

export default function About() {
   return (
      <section id="about">
         <div className="w-150 font-light">
            <h1>ABOUT US</h1>
            <p className="mt-4 text-4xl">
               We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
               <span className="text-[var(--secondary)]">Our mission is to provide you with the best travel experiences.</span>
            </p>
         </div>

         <div className="flex items-center justify-around text-center md:w-150 h-15">
            <div>
               <span className="text-4xl">200+</span>
               <p className="text-[var(--tertiary)]">Happy Customers</p>
            </div>

            <Divider className="bg-[var(--secondary)] h-1/2" />
            
            <div>
               <span className="text-4xl">65+</span>
               <p className="text-[var(--tertiary)]">Top Hotels</p>
            </div>

            <Divider className="bg-[var(--secondary)] h-1/2" />
            
            <div>
               <span className="text-4xl">250+</span>
               <p className="text-[var(--tertiary)]">Experienced Guide</p>
            </div>
         </div>
      </section>
   )
}
