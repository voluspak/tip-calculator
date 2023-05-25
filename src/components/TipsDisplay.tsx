import { type TipsDisplayProps } from '../types.d'

const TipsDisplay: React.FC<TipsDisplayProps> = ({ tipsPerPerson, totalPerPerson, resetCalculator }) => {
  return (
    <section className='bg-teal-900 flex flex-col gap-5 p-5 pt-8 rounded-xl'>
      <div className='flex justify-between'>
        <div>
          <p className='text-white text-md'>Tip Amount</p>
          <p className='text-gray-400 text-sm'>/ Person</p>
        </div>
        <span className='text-teal-500 text-4xl'>${tipsPerPerson}</span>
      </div>

      <div className='flex justify-between'>
        <div>
          <p className='text-white text-md'>Total</p>
          <p className='text-gray-400 text-sm'>/ Person</p>
        </div>
        <span className='text-teal-500 text-4xl'>${totalPerPerson}</span>
      </div>
      <button className='bg-teal-400 py-3 text-lg text-teal-900 rounded-xl' type='reset' onClick={resetCalculator}>RESET</button>
    </section>
  )
}

export default TipsDisplay
