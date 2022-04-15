import { Navigate, Route, Routes as ReactRoutes, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../contexts/Auth"
import { Button } from "@mui/material"
import Auth from "../containers/Auth"
import history from "../utils/history"
import { useEffect } from "react"
const Routes = () => {
  const { token } = useAuth();
  const params = useParams();
  console.log(history, params)
  const Home = () => {
    return (
      <div>
        home
        <Button onClick={() => localStorage.removeItem("token")}>Logout</Button>
      </div>
    )
  }
  const NotFound = () => {
    return (
      <div>
        Route Not Found
        <Button onClick={() => localStorage.removeItem("token")}>Logout</Button>
      </div>
    )
  }
  
  if (token)
    return (
      <CommonRoutes>
        <Route path="/home" element={<Home />} />
        
      </CommonRoutes>
    )
  return (
    <CommonRoutes>
      <Route path="/signup" element={<Auth />} />
      <Route index path="/login" element={<Auth login />} />
    </CommonRoutes>
  )
}
const NotFound = () => {
  return (
    <div>
      Route Not Found
      <Button onClick={() => localStorage.removeItem("token")}>Logout</Button>
    </div>
  )
}
const CommonRoutes = ({ children }) => {
    const location = history.location;
    const navigate = useNavigate();
    useEffect(()=>{
      console.log(location)
      if(location.pathname === '/'){
        navigate('/login')
      }
    },[history])
  return (
    <ReactRoutes>
      <Route path="*" element={<NotFound />} />
      {children}
    </ReactRoutes>
  )
}
export default Routes
