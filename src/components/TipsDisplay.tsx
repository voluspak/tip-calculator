import { type TipsDisplayProps } from '../types.d'
import MountsDisplay from './MountsDisplay'

const TipsDisplay: React.FC<TipsDisplayProps> = ({ tipsPerPerson, totalPerPerson, resetCalculator }) => {
  return (
    <section className='bg-teal-900 flex flex-col gap-5 p-5 pt-8 rounded-xl w-2/4 h-full justify-between'>
      <div className='flex flex-col gap-10'>
        <MountsDisplay
          title='Tip Amount'
          mount={tipsPerPerson}
        />

        <MountsDisplay
          title='Total'
          mount={totalPerPerson}
        />
      </div>
      <button
        className='bg-teal-400 py-3 text-lg text-teal-900 rounded-xl'
        type='reset'
        onClick={resetCalculator}
      >
        RESET
      </button>
    </section>
  )
}

export default TipsDisplay
