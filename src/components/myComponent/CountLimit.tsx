
'use client'

interface LimitProps {
    apiLimitCount: number
}

function CountLimit({apiLimitCount=0}: LimitProps) {
  return (
    <div className="border-r border-gray-300 pr-4 flex space-x-2 font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
    { apiLimitCount}/5 Free Generations
    </div>
  
  )
}

export default CountLimit