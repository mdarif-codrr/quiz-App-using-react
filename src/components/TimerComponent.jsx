import React, { useEffect, useState } from 'react'
import YellowBoard from './YellowBoard';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useParams } from 'react-router';

function TimerComponent({setTime,leftTime}) {
  // const [leftTime, setTime] = useState(60);

 const { setSelectedOption,index,selectedOption,object,subject, setIsAnswered,setIndex,isAnswered} =useContext(QuizContext)

 function addToLocalStorage(selectedOption,isAnswered) {
    
  let data = JSON.parse(localStorage.getItem(`${subject}`)) || [];
  
  const newObject = {
    question: object.question,
    selectedOption,
    id:index,
    // isAnswered:!isAnswered
    
  }
  const isDuplicate = data.some(item=> item.id ===newObject.id)
 if(!isDuplicate){
  data.push(newObject);

  localStorage.setItem(`${subject}`, JSON.stringify(data));
  // console.log('Updated Data:', data);
 }
};

    useEffect(() => {
      if (leftTime <= 0 && index<24){
        setIsAnswered(true);
        setSelectedOption(null);
        setIndex((prevIndex) => prevIndex + 1); // ✅ Correct way to update index
       
        setTime(59)
        addToLocalStorage(selectedOption,isAnswered)

        return; // Timer ko yahan se return karenge
      }
      
      const timer = setInterval(() => {
        if(index<25){
          setTime((prev) => prev - 1);
        }
      }, 1000);
      // console.log(selectedOption);
      
      if(isAnswered){
        // console.log(timer);
        
        return   clearInterval(timer)
        //  console.log('leftTime');
         
        
      }
  
      return () => {
        clearInterval(timer)
      //  console.log('leftTime');
       
      }; // Clean up
    }, [leftTime]);
  
    return (
      <>
      <YellowBoard data={`00:${leftTime < 10 ? '0' + leftTime : leftTime}s`}/>
      </>
    );
  
}

export default TimerComponent