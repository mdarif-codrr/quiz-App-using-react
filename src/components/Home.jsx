import React from 'react'
import { Link, Outlet } from 'react-router'
import Footer from './Footer'
import ContextProvider from '../context/QuizContext'
function Home() {
  // console.log(Outlet)

  return (
    <ContextProvider>
      <Outlet />
      <Footer />
    </ContextProvider>
  )
}

export default Home
