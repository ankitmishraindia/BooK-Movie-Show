import {  Route, Routes } from "react-router-dom"
import MovieList from "./components/MovieList"


function App() {
 
  return(
    <>
      <Routes>
            <Route path='/' element={<MovieList/>}></Route>
            <Route path="/:id" ></Route>
      </Routes>
    </>
  )
}

export default App
