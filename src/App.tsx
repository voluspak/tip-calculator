import { DolarIcon, PersonIcon } from './components/Icons'

const App: React.FC = () => {
  return (
    <div className='h-screen w-screen fondo bg-teal-100 flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-teal-950 tracking-widest'>SPLITTER</h1>
      <main className='bg-white w-screen h-4/5 p-6 rounded-3xl flex flex-col gap-5'>
        <section className={`
          texto flex flex-col gap-4
          [&>fieldset]:flex [&>fieldset]:flex-col [&>fieldset]:w-full

          [&>fieldset>div>input]:w-full [&>fieldset>div>input]:bg-teal-100/50 [&>fieldset>div>input]:self-center
          [&>fieldset>div>input]:rounded [&>fieldset>div>input]:h-10 [&>fieldset>div>input]:text-right [&>fieldset>div>input]:px-3
          [&>fieldset>div>input]:text-2xl [&>fieldset>div>input]:text-teal-900
        `}
        >
          <fieldset>
            <label className=''>Bill</label>
            <div>
              <input type='number' inputMode='numeric' />
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
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>20%</button>
              <button>50%</button>
              <input
                className='bg-teal-100/50 font-bold placeholder-teal-900/70 text-teal-900/70'
                type='number'
                inputMode='numeric'
                placeholder='Custom'
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Number of People</label>
            <div>
              <input type='number' inputMode='numeric' />
              <PersonIcon className='absolute top-3 left-3' />
            </div>
          </fieldset>
        </section>

        <section className='bg-teal-900 flex flex-col gap-5 p-5 pt-8 rounded-xl'>
          <div className='flex justify-between'>
            <div>
              <p className='text-white text-md'>Tip Amount</p>
              <p className='text-gray-400 text-sm'>/ Person</p>
            </div>
            <span className='text-teal-500 text-4xl'>$100</span>
          </div>

          <div className='flex justify-between'>
            <div>
              <p className='text-white text-md'>Total</p>
              <p className='text-gray-400 text-sm'>/ Person</p>
            </div>
            <span className='text-teal-500 text-4xl'>$100</span>
          </div>
          <button className='bg-teal-400 py-3 text-lg text-teal-900 rounded-xl'>RESET</button>
        </section>
      </main>
    </div>
  )
}

export default App
