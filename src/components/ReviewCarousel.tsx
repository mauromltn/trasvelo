import { reviewData1, reviewData2 } from "@/data/reviewData";
import Image from "next/image";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";

const reviewItems1 = reviewData1.map((review) => ({
   content: (
      <div className="relative flex flex-col items-start justify-around shrink-0 rounded-xl border w-100 h-50 p-5">
         <div className="flex gap-5 items-center">
            <Image
               src={review.avatar}
               alt={review.name}
               width={40}
               height={40}
               objectFit="cover"
               className="rounded-full aspect-square object-cover"
            />
            <p className="text-xl font-medium">{review.name}</p>
         </div>
         <p className="text-gray-700">{review.text}</p>
      </div>
   ),
}));

export function ReviewCarousel1() {
   return <InfiniteCarousel items={reviewItems1} className="animate-review-carousel gap-8 mb-8" />;
}

const reviewItems2 = reviewData2.map((review) => ({
   content: (
      <div className="relative flex flex-col items-start justify-around shrink-0 rounded-xl border w-100 h-50 p-5">
         <div className="flex gap-5 items-center">
            <Image
               src={review.avatar}
               alt={review.name}
               width={40}
               height={40}
               className="rounded-full aspect-square object-cover"
            />
            <p className="text-xl font-medium">{review.name}</p>
         </div>
         <p className="text-gray-700">{review.text}</p>
      </div>
   ),
}));

export function ReviewCarousel2() {
   return <InfiniteCarousel items={reviewItems2} className="animate-review-carousel-reverse gap-8 mb-8" />;
}