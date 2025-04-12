import React, { useContext } from 'react'
import { Link } from 'react-router'
import Button from './Button'
import ToggleButton from './ToggleButton'
import Index from './Index'
import { QuizContext } from '../context/QuizContext'

function Subjects() {
 const  {setIndex} = useContext(QuizContext)

  const Subjects = [
    'mathematics',
    'biology',
    'chemistry',
    'physics',
    'history',
    'geography',
    'civics',
    'economics',
    'political science',
    'english grammar',
    'hindi grammar',
  ]
  const handleOnClick = () => {
    localStorage.clear()
    setIndex(0)

  }
  return (
    <section className=" list subject-list text-center px-2 ">
      <p className="my-4 text-3xl font-semibold font-serif">
        Choose One Subject 👇
      </p>
      <ol className="subject-chart m-auto my-0 text-center p-4 bg-pink-300 border-2 border-red-600  ring-2 ring-red-500  max-w-sm rounded-2xl inset-shadow-[0px_0px_5px_4px_rgba(17,4,69,1)] ">
        {Subjects.map((ele) => (
          <li
            className="border-3 my-1.5 py-1 bg-[#35bd3a] rounded-2xl  border-purple-900 font-semibold text-xl font-[winky-sans] "
            key={ele}
          >
            {' '}
            <Link to={`/${ele}`}> {ele.toLocaleUpperCase()} </Link>{' '}
          </li>
        ))}
      </ol>
      <div className="my-5 flex items-center">
        <Button text={'Home 🏠'} to={'/'} />
        <ToggleButton onClick={handleOnClick} text={'Reset all 🔄️'} />
      </div>
    </section>
  )
}

export default Subjects
