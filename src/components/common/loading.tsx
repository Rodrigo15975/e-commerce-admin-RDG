import React from "react"

const Loading = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r flex items-center justify-center from-blue-500 to-blue-400 z-[99999] text-white text-5xl">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r animate-pulse from-blue-200 to-blue-200 mr-3"></div>
        <h1 className="text-6xl animate-pulse  font-bold">E-commerce</h1>
      </div>
    </div>
  )
}

export default Loading
