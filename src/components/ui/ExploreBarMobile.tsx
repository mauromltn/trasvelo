'use client';
import { Search } from 'lucide-react';

export default function ExploreBarMobile() {
   const openExplore = () => {
      // Modify the explore button click
      console.log("Explore button clicked");
   }

  return (
    <div
    onClick={openExplore}
    className='md:hidden absolute flex items-center justify-center top-100 w-70 h-10 gap-3 rounded-full outline-2 outline-white/20 bg-white/90 text-black/80 backdrop-blur-sm active:scale-98 duration-200 ease select-none'>
      <Search
        size={16}
      />
      <span className="text-sm font-medium">Start Exploring</span>
    </div>
  )
}
