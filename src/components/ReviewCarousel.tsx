import { reviewData1, reviewData2 } from "@/data/reviewData";
import Image from "next/image";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";

const reviewItems1 = reviewData1.map((review) => ({
   content: (
      <div className="relative flex flex-col items-start justify-around shrink-0 rounded-xl border w-75 h-47 p-4 md:w-100 md:h-50 md:p-5">
         <div className="flex gap-5 items-center">
            <Image
               src={review.avatar}
               alt={review.name}
               placeholder="blur"
               width={35}
               height={35}
               objectFit="cover"
               className="rounded-full aspect-square object-cover"
            />
            <p className="text-lg md:text-xl font-medium">{review.name}</p>
         </div>
         <p className="text-sm md:text-base text-tertiary">{review.text}</p>
      </div>
   ),
}));

export function ReviewCarousel1() {
   return <InfiniteCarousel items={reviewItems1} className="animate-review-carousel gap-5 mb-5 md:gap-8 md:mb-8" />;
}

const reviewItems2 = reviewData2.map((review) => ({
   content: (
      <div className="relative flex flex-col items-start justify-around shrink-0 rounded-xl border w-75 h-47 p-4 md:w-100 md:h-50 md:p-5">
         <div className="flex gap-5 items-center">
            <Image
               src={review.avatar}
               alt={review.name}
               placeholder="blur"
               width={35}
               height={35}
               objectFit="cover"
               className="rounded-full aspect-square object-cover"
            />
            <p className="text-lg md:text-xl font-medium">{review.name}</p>
         </div>
         <p className="text-sm md:text-base text-tertiary">{review.text}</p>
      </div>
   ),
}));

export function ReviewCarousel2() {
   return <InfiniteCarousel items={reviewItems2} className="animate-review-carousel-reverse gap-5 md:gap-8" />;
}