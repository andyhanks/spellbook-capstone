import { Route, Routes } from "react-router-dom"
import { Login } from "../../auth/Login"
import { Authorized } from "./Authorized"
import { Register } from "../../auth/Register"
import { AllSpellsList } from "../spells/AllSpellsList"
import { MySpellBook } from "../spellbook/MySpellBook"


export const AppView = () => {
    return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  
    <Route path="*" element={
      <Authorized>
        <>
            <MySpellBook/>
            <AllSpellsList/>
        </>
      </Authorized>
  } />

  </Routes>
  }
  
  export default AppView