interface InputButtonProps {
  percentage: number
  handleClick: (percentage: number) => void
  percentageDisplay: string
}

const InputButton: React.FC<InputButtonProps> = ({ handleClick, percentage, percentageDisplay }) => {
  return (
    <button type='button' onClick={() => handleClick(percentage)}>
      {percentageDisplay}
    </button>
  )
}

export default InputButton
