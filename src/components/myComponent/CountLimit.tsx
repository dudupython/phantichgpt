
interface LimitProps {
    apiLimitCount: number
}

function CountLimit({apiLimitCount=0}: LimitProps) {
  return (
    <div className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition">
        { apiLimitCount}/5 Free Generations
    </div>
  
  )
}

export default CountLimit