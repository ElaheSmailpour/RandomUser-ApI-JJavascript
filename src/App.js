import Axios from "axios";
import React, { useState } from "react";
import Profile from "./Profile"
import { v4 as uuidv4 } from "uuid";
function App() {
  const [query, setQuery] = useState("")
  const [userprofile,setuserProfile]=useState([])
const url = `https://randomuser.me/api/?results=${query}`;

  const getData = async () => {

    const result = await Axios.get(url)
    console.log("result=", result)
    setQuery("");
    setuserProfile(result.data.results)
    
  }
  const onsubmitform = (e) => {
    e.preventDefault()
    getData()
  }
  const onchangeInput = (e) => {
    setQuery(e.target.value)
  }

// {userprofile !==[]&& userprofile.map(profile=><Profile key={uuidv4()} profile={profile}/>)}
/*
{userprofile !==[]&& userprofile.map(item=>
          <h2 key={uuidv4()}>{item.name.first}</h2>
          )}*/
  return (
    <div className="App">
      <form onSubmit={onsubmitform}>
        <input type="text" placeholder="search" onChange={onchangeInput} value={query} />
        <button>Result</button>
      </form>
     
        

{userprofile !==[]&& userprofile.map(profile=><Profile key={uuidv4()} user={profile}/>)}

    </div>
  );
}

export default App;
