import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
const buttonClasses = active ? 'text-[#ADB7BE] border-b border-white' : 'text-white'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#ADB7BE] font-sans ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton