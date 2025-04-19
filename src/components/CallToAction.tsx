import Image from "next/image"
import callToAction from "../../public/callToAction.jpg"
import Divider from "./ui/Divider"

export default function CallToAction() {
   return (
      <section className="relative flex justify-center w-full lg:h-180 text-white mt-20">
         <Image
            src={callToAction}
            placeholder='blur'
            layout="fill"
            objectFit="cover"
            className=" brightness-75 rounded-[25] border-5 md:rounded-[35] md:border-15"
            alt="Call to action image"
         />
         <span className="absolute top-50 text-center w-310 text-[4rem] tracking-tight">
            Don't wait any longer! Start your adventure and explore new experiences today
         </span>

         <div className="absolute top-110 flex items-center w-120 h-15 p-2 gap-8 rounded-full border-2 border-white text-sm font-medium backdrop-blur-sm bg-black/5">
            <input
               type="email"
               name="email"
               placeholder="Drop your email address here..."
               className="w-2/3 py-2 pl-4 text-sm font-semibold placeholder-light rounded-full focus:outline-none"
            />

            <Divider className="h-8 bg-white mr-4" />

            <button className="w-1/3 h-full py-2 px-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-300 duration-200 ease cursor-pointer">
               Subscribe
            </button>
         </div>
      </section>
   )
}
