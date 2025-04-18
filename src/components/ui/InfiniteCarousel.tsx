type InfiniteCarouselProps = {
   items: { content: React.ReactNode }[];
   className?: string;
 };
 
 export default function InfiniteCarousel({ items, className = "" }:  InfiniteCarouselProps) {
   return (
     <div className="carousel max-w-90 sm:max-w-180 lg:max-w-300 flex m-auto overflow-hidden">
       <div className={`flex ${className}`}>
         {[...items, ...items].map((item, id) => (
           <div key={id}>
             {item.content}
           </div>
         ))}
       </div>
     </div>
   );
 }