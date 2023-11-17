import { Route, Routes } from "react-router-dom"

import { Authorized } from "./Authorized"

import { AllSpellsList } from "../spells/AllSpellsList"
import { MySpellBook } from "../spellbook/MySpellBook"


export const AppView = () => {
    return <Routes>

  
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