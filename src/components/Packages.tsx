import PackagesCards from "./ui/PackagesCards"

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
         <PackagesCards />
      </section>
   )
}
