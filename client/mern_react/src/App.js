import {useState,useEffect} from "react"
import Axios from "axios"


function App() {

  const [userData,setuserData] = useState([])

  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const [username,setUserName] = useState("")


  useEffect(()=>{

    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setuserData(response.data)
    })

  },[])

  const createUser = ()=>{

    Axios.post("http://localhost:3001/createUser",{
      name:name,
      age:age,
      username:username,
    }).then((response)=>{

    alert(name + "  User Created!!")

    })


  }

  return (
    <div className="App">

      <div className="userDisplay">

        {userData.map((user)=>{

          return(
            <div>
            <h1>Name : {user.name}</h1>
            <h1>Age : {user.age}</h1>
            <h1>UserName : {user.username}</h1>
            </div>
          )

        })}


      </div>


       <div >
        <input type="text" placeholder="name" 
        onChange={(event)=>{setName(event.target.value)}}
        />
        <input 
        type="number" placeholder="age"
        onChange={(event)=>{setAge(event.target.value)}}
        />
        <input 
        type="text" placeholder="username"
        onChange={(event)=>{setUserName(event.target.value)}}
        /><br></br>



        <button onClick={createUser}>
          Submit
        </button>
       </div>

    

       
       
      
    </div>
  );
}

export default App;
