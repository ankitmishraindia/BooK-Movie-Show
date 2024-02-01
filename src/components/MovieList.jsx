import axios from "axios";
import { useEffect, useState } from "react";
import default_image from '../assets/defaultImage.jpg'
import { Link } from "react-router-dom";

function MovieList(){

    const [movieList,setMovieList]=useState([])
    const [loading,setLoading]=useState('Loading...')

    async function getMovies(){
        try {
                const res=await axios.get('https://api.tvmaze.com/search/shows?q=all')
            console.log(res.data)
            setMovieList(res.data)
            setLoading('')
        } catch (error) {
            
            window.alert(`Error: ${error.message}\nMessage: Please try again.`)
        }
        

    }

    useEffect(()=>{
        getMovies()
    },[])

    return(
        <div className="bg-gray-600 min-h-screen p-11 flex items-center justify-center space-y-8 flex-col">
            {!loading?<>
            <h1 className="text-5xl underline text-white tracking-wider">MOVIE LIST</h1>
            <div className="p-6 flex flex-wrap gap-3 justify-center ">
                {movieList&&movieList.map((item)=>(
                    <div className="p-4 bg-gray-800 w-fit space-y-0" key={item.show.id}>
                        <img className="w-60 h-100 rounded-lg" src={item.show.image?item.show.image.medium:default_image} alt="movie-image" />
                        <p className="text-white">Name: {item.show.name}</p>
                        <p className="text-white">Language: {item.show.language}</p>
                        <p className="text-white">Duration: {item.show.averageRuntime} min</p>
                        <Link to={`/${item.show.id}`}>
                          <button className="m-auto py-1 hover:scale-110 px-5 font-semibold bg-white text-sm">Movie Summary</button>
                        </Link>
                        
                   </div>
                ))}
                 
            </div>
            </>:<p className="text-2xl text-white">{loading}</p>}
            
        </div>
    )
}

export default MovieList;