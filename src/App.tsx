import { useCalculator } from './hooks/useCalculator'
import InputsSection from './components/InputsSection'
import TipsDisplay from './components/TipsDisplay'

const App: React.FC = () => {
  const {
    resetCalculator, handleCustomPercentage, handleClick,
    tipsPerPerson, totalPerPerson, handleBill, handlePeople
  } = useCalculator()

  return (
    <div className='h-screen w-screen bg-teal-100 flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-teal-950 tracking-widest'>SPLITTER</h1>
      <form className='bg-white w-screen h-4/5 p-6 rounded-3xl flex flex-col gap-5 lg:flex-row lg:w-5/6 lg:h-3/4'>
        <InputsSection
          handleBill={handleBill}
          handleClick={handleClick}
          handleCustomPercentage={handleCustomPercentage}
          handlePeople={handlePeople}
        />

        <TipsDisplay
          tipsPerPerson={tipsPerPerson}
          totalPerPerson={totalPerPerson}
          resetCalculator={resetCalculator}
        />
      </form>
    </div>
  )
}

export default App
