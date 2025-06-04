import { Check } from 'lucide-react';

export default function SonnerContent() {
  return (
    <div className="grid grid-rows-2 justify-items-center w-60 p-4 bg-white rounded-4xl shadow-lg gap-6">
      <div className="w-fit rounded-full bg-green-500 p-4 mt-3">
         <Check color='white' size={28} />
      </div>
      <p className='text-[18px] font-semibold mt-3'>Booked Successfully!</p>
    </div>
  )
}
