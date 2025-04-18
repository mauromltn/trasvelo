import { ReviewCarousel1, ReviewCarousel2 } from './ReviewCarousel';

export default function Review() {
  return (
    <section
      id="review"
      className='flex-col'
    >
      <div className="text-center lg:mb-10">
        <h1>Review</h1>
        <h2 className="text-4xl lg:text-[3.2rem]">Your trusted partner in travel</h2>
      </div>

      <ReviewCarousel1 />
      <ReviewCarousel2 />
    </section>
  )
}
