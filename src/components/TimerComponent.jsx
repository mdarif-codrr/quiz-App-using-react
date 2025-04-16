import React, { useEffect, useRef, useState } from 'react'
import YellowBoard from './YellowBoard'
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { useParams } from 'react-router'

function TimerComponent({ setTime, timeLeft }) {
  // const [timeLeft, setTime] = useState(60);
  const timerRef = useRef(null);
  const {
    setSelectedOption,
    index,
    selectedOption,
    object,
    subject,
    setIsAnswered,
    setIndex,
    isAnswered,
  } = useContext(QuizContext)

  function addToLocalStorage(selectedOption, isAnswered) {
    let data = JSON.parse(localStorage.getItem(`${subject}`)) || []

    const newObject = {
      question: object.question,
      selectedOption,
      id: index,
      // isAnswered:!isAnswered
    }
    const isDuplicate = data.some((item) => item.id === newObject.id)
    if (!isDuplicate) {
      data.push(newObject)

      localStorage.setItem(`${subject}`, JSON.stringify(data))
    }
  }

  useEffect(() => {
    const body = document.body

    body.classList.remove('bg-red-200', 'bg-yellow-200', 'bg-[#cce2c2]')
    if (timeLeft > 30) {
      body.classList.add('bg-[#cce2c2]')
    } else if (timeLeft > 15 && timeLeft <= 30) {
      body.classList.add('bg-yellow-200')
    } else if (timeLeft <= 15) {
      body.classList.add('bg-red-200')
    }
if(isAnswered){
  console.log('ohh');
  
  clearInterval(timerRef.current)
  return
}
    if (timeLeft <= 0 && index < 24) {
      setIsAnswered(true)
      setSelectedOption(null)
      setIndex((prevIndex) => prevIndex + 1)
      console.log(index)

      setTime(59)
      console.log('oh')

      addToLocalStorage(selectedOption, isAnswered)

      return
    }

    return () => {
      body.classList.remove('bg-red-200', 'bg-yellow-200', 'bg-[#cce2c2]')
      body.classList.add('bg-[#cce2c2]')
    }
  }, [timeLeft])

  useEffect(() => {
     timerRef.current = setInterval(() => {
      if (index < 25) {
        setTime((prev) => prev - 1)
      }
    }, 1000)

    return () => {
      clearInterval(timerRef.current)
    }
  }, [index])

  return (
    <>
      <YellowBoard data={`00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}s`} />
    </>
  )
}

export default TimerComponent
