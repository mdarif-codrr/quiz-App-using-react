import React from 'react'
import ToggleButton from './ToggleButton'
// import { IoIosBackspace } from "react-icons/io"

function YellowBoard({data, button}) {
  return (
    <div className="flex-container  flex items-center justify-end ">
      {/* <IoIosBackspace /> */}

          <span className="timer bg-amber-400 rounded-sm p-1 font-semibold">{data}</span>
        </div>
  )
}

export default YellowBoard