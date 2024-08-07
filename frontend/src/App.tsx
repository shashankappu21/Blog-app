import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/blogs/:id' element={<Blog />}></Route>
          <Route path='/blogs' element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
