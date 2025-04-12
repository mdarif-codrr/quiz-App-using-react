
import './App1.css'
import { Route, Routes } from 'react-router'

// import Math from './pages/Math'
// import Chemistry from './pages/Chemistry'
// import Physics from './pages/Physics'
// import Biology from './pages/Biology'
// import History from './pages/History'
// import Civics from './pages/Civics'
// import Economics from './pages/Economics'
// import Geography from './pages/Geography'
// import PoliticalScience from './pages/PoliticalScience'
// import EnglishGrammer from './pages/EnglishGrammer'
// import HindiGrammer from './pages/HindiGrammer'
import Home from './components/Home'
import Subjects from './components/Subjects'
import Index from './components/Index'
import MainPage from './pages/MainPage'
import JsonPhp from './components/JsonPhp'
import QuizTime from './components/QuizTime'




function App() {
 

  return (
   <>
    {/* <Routes>
      <Route  path='/' element={<Home/>}>
      <Route index element={<Index/>}/>
      <Route path='/subjects' element={<Subjects/>} />
      <Route path='/mathematics' element={<Math />} />
      <Route path='/chemistry' element={<Chemistry />} />
      <Route path='/biology' element={<Biology />} />
      <Route path='/physics' element={<Physics />} />
      <Route path='/history' element={<History />} />
      <Route path='/civics' element={<Civics />} />
      <Route path='/economics' element={<Economics />} />
      <Route path='/geography' element={<Geography />} />
      <Route path='/political science' element={<PoliticalScience />} />
      <Route path='/english grammer' element={<EnglishGrammer />} />
      <Route path='/hindi grammer' element={<HindiGrammer />} />
      <Route path='/main' element={<MainPage />} />
      </Route>
    </Routes> */}
    <Routes>
      <Route>
      <Route  path='/' element={<Home/>}>
      <Route index element={<Index/>}/>
      <Route path='/subjects' element={<Subjects/>}/>
      <Route path='/:subject' element={<QuizTime/>} />
      <Route path='/php' element={<JsonPhp/>} />
      </Route>
      </Route>
    </Routes>
   </>
  )
}

export default App
