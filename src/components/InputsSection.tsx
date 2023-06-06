import { DolarIcon, PersonIcon } from './Icons'
import { type InputsSectionProps } from '../types.d'
import InputButton from './InputButton'

const InputsSection: React.FC<InputsSectionProps> = ({ handleBill, handleClick, handleCustomPercentage, handlePeople }) => {
  return (
    <section className={`
    texto flex flex-col gap-4
    lg:w-2/4

    [&>fieldset]:flex [&>fieldset]:flex-col [&>fieldset]:w-full

    [&>fieldset>div>input]:w-full [&>fieldset>div>input]:bg-teal-100/50 [&>fieldset>div>input]:self-center
    [&>fieldset>div>input]:rounded [&>fieldset>div>input]:h-10 [&>fieldset>div>input]:text-right [&>fieldset>div>input]:px-3
    [&>fieldset>div>input]:text-2xl [&>fieldset>div>input]:text-teal-900
  `}
    >
      <fieldset>
        <label className=''>Bill</label>
        <div>
          <input type='number' inputMode='numeric' onChange={(event) => { handleBill(event) }} />
          <DolarIcon className='absolute top-3 left-3' />
        </div>
      </fieldset>

      <fieldset>
        <label className='mb-5'>Select Tip %</label>

        <div className={`
        grid grid-cols-2 gap-5

        [&>button]:bg-teal-900 [&>button]:px-10 [&>button]:py-3
        [&>button]:text-2xl [&>button]:rounded [&>button]:text-white
        [&>button]:font-normal
      
      `}
        >
          <InputButton handleClick={handleClick} percentage={0.05} percentageDisplay='5%' />
          <InputButton handleClick={handleClick} percentage={0.10} percentageDisplay='10%' />
          <InputButton handleClick={handleClick} percentage={0.15} percentageDisplay='15%' />
          <InputButton handleClick={handleClick} percentage={0.2} percentageDisplay='20%' />
          <InputButton handleClick={handleClick} percentage={0.5} percentageDisplay='50%' />
          <input
            className='bg-teal-100/50 font-bold placeholder-teal-900/70 text-teal-900/70 py-3 text-2xl px-10'
            type='number'
            inputMode='numeric'
            placeholder='Custom'
            onChange={handleCustomPercentage}
          />
        </div>
      </fieldset>

      <fieldset>
        <label>Number of People</label>
        <div>
          <input type='number' inputMode='numeric' onChange={(event) => { handlePeople(event) }} />
          <PersonIcon className='absolute top-3 left-3' />
        </div>
      </fieldset>
    </section>
  )
}

export default InputsSection
