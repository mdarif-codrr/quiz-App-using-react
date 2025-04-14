import React from 'react'
import { Link } from 'react-router'

function Button({ text, to, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${
        text === 'Home 🏡' ? 'bg-pink-500' : 'bg-green-500'
      } py-2 max-sm:py-1 text-center  rounded-2xl my-0 m-auto shadow-lg shadow-black hover:scale-98 cursor-pointer  ${
        text === 'Home 🏡' ? 'hover:bg-pink-600' : 'hover:bg-green-700'
      }`}
    >
      <Link to={to} className="font-semibold text-xl w-full px-3 max-md:text-sm  text-center pb-5  ">
        {text}
      </Link>{' '}
    </button>
  )
}

export default Button
