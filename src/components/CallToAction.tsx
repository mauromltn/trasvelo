import Image from "next/image"
import callToAction from "../../public/callToAction.jpg"
import Divider from "./ui/Divider"

export default function CallToAction() {
   return (
      <section className="relative flex justify-center w-full h-120 md:h-180 text-white mt-20">
         <Image
            src={callToAction}
            placeholder='blur'
            layout="fill"
            objectFit="cover"
            className=" brightness-75 rounded-[25] border-5 md:rounded-[35] md:border-15"
            alt="Call to action image"
         />
         <span className="absolute top-33 sm:top-40 md:top-60 lg:top-50 text-center w-90 sm:w-130 md:w-190 lg:w-250 xl:w-310 text-[1.5rem] md:text-[2.3rem] lg:text-[3rem] xl:text-[4rem] font-medium md:font-normal tracking-tight">
            Don&apos;t wait any longer! Start your adventure and explore new experiences today
         </span>

         <div className="absolute top-68 md:top-100 xl:top-110 flex items-center w-75 h-12 md:w-120 md:h-15 p-1.5 md:p-2 gap-3 md:gap-8 rounded-full border-2 border-white text-sm font-semibold backdrop-blur-sm bg-black/5">
            <input
               type="email"
               name="email"
               placeholder="Drop your email address here..."
               className="hidden md:block w-2/3 pl-4 rounded-full focus:outline-none"
            />

            { /* input per desktop */ }
            <input
               type="email"
               name="email"
               placeholder="Drop your email here..."
               className="md:hidden w-2/3 pl-4 text-xs rounded-full focus:outline-none"
            />

            <Divider className="h-5 md:h-8 bg-white mr-2 md:mr-4" />

            <button className="w-1/3 h-full md:py-2 px-2 bg-white text-xs text-black rounded-full hover:bg-gray-300 duration-200 ease cursor-pointer">
               Subscribe
            </button>
         </div>
      </section>
   )
}
