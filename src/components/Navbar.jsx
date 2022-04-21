import { Button } from "./styled/Button"
import { Nav } from "./styled/Nav"
import { AuthContext } from "../context/Authcontextprovider"
import { useContext } from "react"

export const Navbar=()=>{
    const {auth,handelauth}=useContext(AuthContext)
  
    return(
        <Nav>
            <Button onClick={()=>{
                handelauth()
            }}> {auth===false ? "Login" : "Logout"}</Button>
        </Nav>
    )
}