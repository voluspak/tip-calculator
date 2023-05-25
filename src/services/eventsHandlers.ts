import { type HandleChangeProps, type HandlePercentageProps } from '../types.d'

export function handleChange ({ event, setterFunction }: HandleChangeProps): void {
  setterFunction(Number(event.target.value))
}

const isNegative = (value: number): boolean => Math.sign(value) === -1

export function handlePercentage ({ setterFunction, percentage }: HandlePercentageProps): void {
  let newPercentage = percentage

  if (isNegative(newPercentage)) {
    newPercentage *= -1
  }
  if (newPercentage >= 1) {
    setterFunction(newPercentage / 100)
    return
  }

  setterFunction(newPercentage)
}
