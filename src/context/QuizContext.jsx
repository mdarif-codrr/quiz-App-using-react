import { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import biology from '../data/biology'
import chemistry from '../data/chemistry'
import englishGrammar from '../data/englishGrammar'
import civics from '../data/civics'
import economics from '../data/economics'
import hindiGrammar from '../data/hindiGrammar'
import history from '../data/history'
import mathematics from '../data/math'
import physics from '../data/physics'
import politicalScience from '../data/politicalScience'
import geography from '../data/geography'
import Error from '../components/Error'

export const QuizContext = createContext()

function ContextProvider({ children }) {
  // console.log(children);
  const param = useParams()
  const subject = param.subject
  const localData = JSON.parse(localStorage.getItem(`${subject}`))
  // const newIdx = localData ? localData[localData.length - 1].id : 0
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [index, setIndex] = useState(
    localData ? localData[localData.length - 1].id : 0
  )
  let object

  const subjectData = {
    biology,
    chemistry,
    'english grammar': englishGrammar,
    civics,
    economics,
    'hindi grammar': hindiGrammar,
    history,
    mathematics,
    physics,
    'political science': politicalScience,
    geography,
  }
  
  if (subject in subjectData) {
    object = subjectData[subject][index]
  } else if (subject !== undefined) {
    return <Error />
  }

  return (
    <QuizContext.Provider
      value={{
        object,
        subject,
        selectedOption,
        setSelectedOption,
        isAnswered,
        setIsAnswered,
        index,
        setIndex,
        subjectData,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export default ContextProvider
