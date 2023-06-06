import './Button.css'
const Button = ({children}) => {
  return (
    <button className='my-btn w-full py-2 px-4 rounded-md font-bold text-gray-700'>{children}
    
    </button>
  )
}

export default Button