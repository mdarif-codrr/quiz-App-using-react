import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function Option({ options, answer,onClick }) {
//  console.log(selectedOption);
  const {selectedOption,isAnswered}= useContext(QuizContext)
 

  return (
    <div className="options rounded my-3 bg-[#f5f5f57a] py-5">
      {options.map((ele) => {
        const isCorrect = ele === answer;
        const isSelected = ele === selectedOption;

        const btnClass = `option w-[92%] text-left cursor-pointer border-3 border-[#b5b3b3] my-3 mx-5 p-2 font-semibold rounded 
          ${isSelected ? (isCorrect ? 'bg-green-400' : 'bg-red-500') : ''}`;

        return (
          <button
            onClick={() => onClick(ele)}
            key={ele}
            className={btnClass}
            disabled={isAnswered} 
          >
            <span className="optn">{ele}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Option;
