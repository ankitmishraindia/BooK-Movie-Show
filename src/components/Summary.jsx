import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Summary(){

      const {id}=useParams()

      const [summary,setSummary]=useState('')

      async function getSummary(){
        try {
              const res=await axios.get(`https://api.tvmaze.com/shows/${id}`)
              console.log(res.data)
              setSummary(res.data)

              
        } catch (error) {
            console.error("summary fetching error:",error)
        }
      }
      
      function bookShow(){
        const formDiv=document.getElementById('formDiv');
        formDiv.style.display='flex'
      }

      useEffect(()=>{
        getSummary()
      },[])

    return(
        <div className="bg-gray-600 min-h-screen  flex items-center justify-center relative">
           <div className="bg-gray-800 text-white p-14 space-y-8 max-w-[700px]">
              <h1 className="text-4xl font-semibold text-white tracking-wider underline">Summary</h1>
              <div className="text-2xl tracking-wider" dangerouslySetInnerHTML={{ __html: summary.summary }}></div> 
              <button onClick={bookShow} className="mx-auto py-2 hover:scale-110 px-5 font-bold text-black bg-white text-sm">BOOK MOVIE SHOW</button>
           </div>
           <div id="formDiv" className="hidden absolute w-full h-full  items-center justify-center p-8 bg-gray-800">
            <form  action="" className="flex flex-col text-white w-[500px] space-y-3 bg-gray-900  p-8 border border-white rounded-md">
                <label htmlFor="">Movie: <b>{summary.name}</b></label>
                <label htmlFor="">Language: {summary.language}</label>
                {summary.genres&&<label htmlFor="">Genre: {summary.genres[0]},{summary.genres[0]}</label>} 
                <div className=" grid grid-cols-2 gap-x-2 gap-y-3">
                    <div className=""><label htmlFor="name">
                        Firstname:</label>
                    <input type="text" id="fname" placeholder="Enter your name..." className="px-3 rounded-md text-black"/>
                    </div>
                    <div className=""><label htmlFor="lname">
                        Lastname:</label>
                    <input type="text" id="lname" placeholder="Enter your name..." className="px-3 rounded-md text-black"/>
                    </div>
                    <div className=""><label htmlFor="email">
                        Email:</label>
                    <input type="email" id="email" placeholder="Enter your email..." className="px-3 rounded-md text-black"/>
                    </div>
                    <div className=""><label htmlFor="city">
                        City:</label>
                    <input type="text" id="city" placeholder="Enter your City..." className="px-3 rounded-md text-black"/>
                    </div>
                    <div className=""><label htmlFor="mobile">
                        Mobile:</label>
                    <input type="number" id="mobile" placeholder="Enter your Mobile..." className="px-3 rounded-md text-black"/>
                    </div>
                    <div className=""><label htmlFor="seat">
                        Total Seat:</label>
                    <input type="number" id="seat" placeholder="Enter your seat..." className="px-3 rounded-md text-black"/>
                    </div>

                   
                    
                </div>
                 <button type="submit" className="mx-auto py-2 hover:scale-110 px-5 font-bold text-black bg-white text-sm">BOOK  SHOW</button>
            </form>
           </div>
        </div>
    )
}
export default Summary;