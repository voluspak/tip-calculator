import { MountsDisplayProps } from '../types'

const MountsDisplay: React.FC<MountsDisplayProps> = ({ title, mount }) => {
  return (
    <div className='flex justify-between'>
      <div>
        <p className='text-white text-md'>{title}</p>
        <p className='text-gray-400 text-sm'>/ Person</p>
      </div>
      <span className='text-teal-500 text-4xl'>${mount}</span>
    </div>
  )
}

export default MountsDisplay
