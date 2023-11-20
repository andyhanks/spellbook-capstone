import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { SpellBookContainer } from "../spellbook/SpellBookContainer"
import { ReviewForm } from "../ratings/ReviewForm"




export const AppView = () => {
    return <Routes>

  
    <Route path="*" element={
      <Authorized>
        <>
  
        <SpellBookContainer/>

        </>
      </Authorized>
  } />
<Route path="/reviewForm" element={<ReviewForm/>}/>
  </Routes>
  }
  
  export default AppView