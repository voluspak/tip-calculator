import { useState, useEffect } from 'react'
import { handleChange, handlePercentage } from '../services/eventsHandlers'
import { type UseCalculatorReturn, type InputChangeEvent } from '../types.d'

export const useCalculator = (): UseCalculatorReturn => {
  const [bill, setBill] = useState<number>(0)
  const [people, setPeople] = useState<number>(1)
  const [tipsPerPerson, setTipsPerPerson] = useState<number>(0)
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0)
  const [tipPercentage, setTipPercentage] = useState<number>(0)

  const realPeople = (people > 0 && people !== undefined && people !== null && !isNaN(people))

  function handleClick (percentage: number): void {
    handlePercentage({ setterFunction: setTipPercentage, percentage })
  }

  function handleCustomPercentage (event: InputChangeEvent): void {
    handlePercentage({ setterFunction: setTipPercentage, percentage: Number(event.target.value) })
  }

  function handleBill (event: InputChangeEvent): void {
    handleChange({ event, setterFunction: setBill })
  }

  function handlePeople (event: InputChangeEvent): void {
    handleChange({ event, setterFunction: setPeople })
  }

  function resetCalculator (): void {
    setBill(0)
    setPeople(0)
    setTipPercentage(0)
  }

  useEffect(() => {
    function calculateTip (): void {
      const initialTipsPerPerson = 0
      const initialTotalperPerson = 0
      if (bill === 0 || !realPeople) {
        setTipsPerPerson(initialTipsPerPerson)
        setTotalPerPerson(initialTotalperPerson)
      }

      // Cálculo de propina por persona
      const tips = bill * tipPercentage
      const newTipsPerPerson = Number((tips / people).toFixed(2))

      // Cálculo del total a pagar de ticket + propina por persona
      const newTotalperPerson = Number(((bill + tips) / people).toFixed(2))

      if (!isFinite(newTipsPerPerson) && !isFinite(newTotalperPerson)) {
        setTipsPerPerson(initialTipsPerPerson)
        setTotalPerPerson(initialTotalperPerson)
      } else {
        setTipsPerPerson(newTipsPerPerson)
        setTotalPerPerson(newTotalperPerson)
      }
    }

    calculateTip()
  }, [bill, people, tipPercentage, realPeople])

  return {
    resetCalculator,
    handleCustomPercentage,
    handleClick,
    tipsPerPerson,
    totalPerPerson,
    handleBill,
    handlePeople
  }
}
