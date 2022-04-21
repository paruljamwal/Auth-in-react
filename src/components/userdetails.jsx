import { useTransition } from "react"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Authcontextprovider"
import { Show } from "./showdetails"
import { SignIn } from "./signin"

export const Database = () => {

  const { auth } = useContext(AuthContext)
  
  const [user, setUser] = useState({
    data: {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: ""
    }
  })


  useEffect(()=>{
    if(auth===true){
      fetch(`https://reqres.in/api/users/${Math.floor(Math.random()*12+1)}`)
      .then((res)=>res.json()).then((data)=>setUser(data))
    }
  
  },[auth])

  return (
    <div>
      {
        auth===true ? <Show user={user}></Show> : <SignIn></SignIn>
      } 
   

    </div>
  )





}
