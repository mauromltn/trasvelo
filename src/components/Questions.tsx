import { questionsData } from '@/data/questionsData'

export default function Questions() {
  return (
    <section
      id="questions"
      className="flex mt-10"
      >
      <div className="lg:w-1/2">
        <h1>FAQs</h1>
        <h2 className="text-4xl lg:text-[3.2rem] leading-13 md:leading-18">Frequently Asked Questions</h2>
        <p className="max-w-130 md:text-lg text-secondary">We belive in the power of collective actions to address the urgent environmental challenges facing our planet.</p>
      </div>
      <div className="flex flex-col lg:w-1/2 gap-5">
        {questionsData.map((questionItem, id) => (
          <div
            key={id}
            className="sm:py-1 sm:px-4 collapse collapse-arrow border border-secondary rounded-2xl"
          >
            <input type="radio" name="my-accordion-2" defaultChecked={id === 0} />
            <h3 className='collapse-title text-lg md:text-xl font-medium'>{questionItem.question}</h3>
            <p className='collapse-content text-secondary'>{questionItem.answer}.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
