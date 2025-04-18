import React from 'react'
import Index from './Index'

function ToggleButton({ text, onClick, title }) {
  // console.log(text);

  return (
    <button
      title={title}
      onClick={onClick}
      type="button"
      className={`${
        text === 'Reset all 🔄️'
          ? 'bg-red-500'
          : 'bg-green-500' && text === '<<< Back'
          ? 'bg-blue-500'
          : 'bg-green-500'
      }  py-2.5 px-3 font-semibold max-md:text-sm  rounded-2xl my-0 m-auto shadow-lg shadow-black hover:scale-98 cursor-pointer ${
        text === 'Reset all 🔄️'
          ? 'hover:bg-red-700'
          : 'hover:bg-green-700' && text === '<<< Back'
          ? 'hover:bg-blue-700'
          : 'hover:bg-green-700'
      }`}
    >
      {text}
    </button>
  )
}

export default ToggleButton
