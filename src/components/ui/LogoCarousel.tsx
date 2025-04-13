import Image from "next/image";
import logoImages from "@/data/logoImages";

export default function LogoCarousel() {
   return (
      <div className="carousel max-w-90 md:w-280 flex m-auto overflow-hidden">
         <div className="flex gap-8 md:gap-15 md:my-30 animate-infinite-carousel">
         {[...logoImages, ...logoImages].map((logo, id) => (
            <div key={id} className="relative shrink-0 w-25 h-25 md:w-40 md:h-40">
            <Image
               src={logo.src}
               alt={logo.alt}
               fill
               className="grayscale contrast-200"
            />
            </div>
         ))}
         </div>
      </div>
   );
}