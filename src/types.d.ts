export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

export interface SetterHandler {
  setterFunction: (value: number) => void
}

export interface HandleChangeProps extends SetterHandler {
  event: React.ChangeEvent<HTMLInputElement>
}

export interface HandlePercentageProps extends SetterHandler {
  percentage: number
}

export interface TipsDisplayProps {
  tipsPerPerson: number
  totalPerPerson: number
  resetCalculator: () => void
}

export interface InputsSectionProps {
  handleBill: (event: InputChangeEvent) => void
  handlePeople: (event: InputChangeEvent) => void
  handleClick: (percetage: number) => void
  handleCustomPercentage: (event: InputChangeEvent) => void
}

export interface UseCalculatorReturn {
  resetCalculator: () => void
  handleCustomPercentage: (event: InputChangeEvent) => void
  handleClick: (percentage: number) => void
  tipsPerPerson: number
  totalPerPerson: number
  handleBill: (event: InputChangeEvent) => void
  handlePeople: (event: InputChangeEvent) => void
}
