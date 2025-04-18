import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import { logoImages } from "@/data/logoImages";
import Image from "next/image";

const logoItems = logoImages.map((logo) => ({
  content: (
    <div className="relative shrink-0 w-25 h-25 md:w-35 md:h-35">
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        className="grayscale contrast-1000"
      />
    </div>
  ),
}));

export default function LogoCarousel() {
  return <InfiniteCarousel items={logoItems} className="gap-8 md:gap-17 animate-logo-carousel" />;
}