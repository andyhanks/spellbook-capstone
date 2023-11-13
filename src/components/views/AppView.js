import { Route, Routes } from "react-router-dom"
import { Login } from "../../auth/Login"
import { Authorized } from "./Authorized"


export const AppView = () => {
    return <Routes>
    <Route path="/login" element={<Login />} />
  
  
    <Route path="*" element={
      <Authorized>
        <>
            <Login/>
         
        </>
      </Authorized>
  } />

  </Routes>
  }
  
  export default AppView