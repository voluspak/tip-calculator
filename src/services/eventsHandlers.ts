interface SetterHandler {
  setterFunction: (value: number) => void
}

interface HandleChangeProps extends SetterHandler {
  event: React.ChangeEvent<HTMLInputElement>
}

interface HandlePercentageProps extends SetterHandler {
  percentage: number
}

export function handleChange ({ event, setterFunction }: HandleChangeProps): void {
  setterFunction(Number(event.target.value))
}

export function handlePercentage ({ setterFunction, percentage }: HandlePercentageProps): void {
  setterFunction(percentage)
}
