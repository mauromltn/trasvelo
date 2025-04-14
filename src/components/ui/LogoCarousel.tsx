import Image from "next/image";
import logoImages from "@/data/logoImages";

export default function LogoCarousel() {
   return (
      <div className="carousel max-w-90 sm:max-w-180 lg:max-w-300 flex m-auto overflow-hidden">
         <div className="flex gap-8 md:gap-17 animate-infinite-carousel">
         {[...logoImages, ...logoImages].map((logo, id) => (
            <div key={id} className="relative shrink-0 w-25 h-25 md:w-35 md:h-35">
            <Image
               src={logo.src}
               alt={logo.alt}
               fill
               className="grayscale contrast-1000"
            />
            </div>
         ))}
         </div>
      </div>
   );
}