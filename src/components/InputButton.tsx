import { InputButtonProps } from '../types.d'

const InputButton: React.FC<InputButtonProps> = ({ handleClick, percentage, percentageDisplay }) => {
  return (
    <button type='button' onClick={() => handleClick(percentage)}>
      {percentageDisplay}
    </button>
  )
}

export default InputButton
