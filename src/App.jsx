import {  Route, Routes } from "react-router-dom"
import MovieList from "./components/MovieList"
import Summary from "./components/Summary"


function App() {
 
  return(
    <>
      <Routes>
            <Route path='/' element={<MovieList/>}></Route>
            <Route path="/:id" element={<Summary/>}></Route>
      </Routes>
    </>
  )
}

export default App
