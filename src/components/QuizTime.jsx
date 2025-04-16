import React, { useContext, useEffect, useState } from 'react'
import {QuizContext} from '../context/QuizContext'
import QuizLogo from './image/group4.svg'
import Volume from './image/iconVolume.svg'
import YellowBoard from './YellowBoard'
import Option from './Option'
import Button from './Button'
import ToggleButton from './ToggleButton'
import TimerComponent from './TimerComponent'
import NamePlate from './NamePlate'

function QuizTime() {
    const {setSelectedOption,isAnswered,object,subjectData, setIsAnswered,index,setIndex,subject} = useContext(QuizContext)
   const [timeLeft, setTimeLeft] = useState(60);
  


   useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(`${subject}`));
   
    if (localData && localData.length > 0) {
      const lastId = localData[localData.length - 1].id;
      setIndex(lastId); 
    } else {
      setIndex(0); 
     }
  }, [subject]);

    useEffect(() => {
        let savedData = JSON.parse(localStorage.getItem(`${subject}`)) || [];
      // console.log(index);
      
        if(savedData[index]?.selectedOption !== undefined){
          setSelectedOption(savedData[index].selectedOption);
          setIsAnswered(true);
        } else {
          setSelectedOption(null);
          setIsAnswered(false);
        }
        },
      [index]);
  function addToLocalStorage(selectedOption,isAnswered) {
    
    let data = JSON.parse(localStorage.getItem(`${subject}`)) || [];
    
    const newObject = {
      question: object.question,
      selectedOption,
      id:index,
      
    }
    const isDuplicate = data.some(item=> item.id ===newObject.id)
   if(!isDuplicate){
    data.push(newObject);
  
    localStorage.setItem(`${subject}`, JSON.stringify(data));
   }
  };


    const handleOnClick = (ele) => {
 
      if (isAnswered) return; 
    setSelectedOption(ele);
      setIsAnswered(true); 
      addToLocalStorage(ele,isAnswered)
      setTimeLeft(59)
    };

    const handleBackNextBtn = (arrg)=>{
      if(arrg==='back' && index!==0){

        setIndex((prevIndex) => prevIndex - 1)

      }else if(arrg!=='back' && index<subjectData[subject].length-1 ){

        

        if(timeLeft<=0 || isAnswered){
          setTimeLeft(60)
      setIndex((prevIndex) => prevIndex + 1)
      setSelectedOption(null); 
        setIsAnswered(false); 

        }

      }else{
        return
      }
    }

      const handleReset = ()=>{
        localStorage.removeItem(subject)
        setSelectedOption(null);
          setIsAnswered(false);
          setIndex(0)
          setTimeLeft(60)

      };
    const handleHome =()=>{
      setIndex(0)
      
    }


  return (
    <section className="quiz-time p-4   ">
        <div className="container2 flex items-center justify-between px-3 ">
          <div className="img-container">
            <img className="logo max-w-28" src={QuizLogo} alt="" />
          </div>
          <div> <ToggleButton text={'Reset 🔄️'} title={'reset this subject'} onClick={handleReset} /> </div>
          <div className="music-btn">
            <img className="sound max-w-5" src={Volume} alt="" />
          </div>
        </div>
        < YellowBoard data={`${index+1}/${subjectData[subject].length}`}  />
        <NamePlate text={subject.toUpperCase()} />
        <p className="question  w-full p-5 font-semibold text-xl bg-[#f5f5f57a] my-3 rounded-xl ">
          {object.question || 'Loading...'}
        </p>
        <TimerComponent setTime={setTimeLeft} timeLeft={timeLeft} />
        <Option options={object.options} answer={object.answer} onClick={handleOnClick} /> 
        <div className="btn-div flex py-5">
            <ToggleButton onClick={()=>handleBackNextBtn('back')} text={'<<< Back'} />
            <Button text={'Home 🏡'} onClick={handleHome} to={'/subjects'} />
            <ToggleButton onClick={handleBackNextBtn} text={'Next >>>'} />
         
        </div>
      </section>
  )
}

export default QuizTime