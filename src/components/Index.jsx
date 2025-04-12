import React from 'react'
import QuizLogo from './image/group4.svg'
import Button from './Button'
function Index() {
  return (
    <section className="starter my-9 ">
      <div className="container1 max-w-4xl m-auto my-0 flex flex-col  ">
        <img className='w-full' src={QuizLogo} alt="" />
        <Button text={'Start Now >>>'} to={'/subjects'} />
      </div>
      {/* <p className="home-msg">Highest Score: 20/25</p> */}
    </section>
  )
}

export default Index
