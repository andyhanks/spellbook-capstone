import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { SpellBookContainer } from "../spellbook/SpellBookContainer"
import { ReviewForm } from "../ratings/ReviewForm"
import "./AppView.css" 
import { ReviewEdit } from "../ratings/ReviewEdit"




export const AppView = () => {
    return <Routes>
    <Route path="/" element={<SpellBookContainer/>} />
<Route path="/reviewForm/:spellId" element={<ReviewForm/>}/>
<Route path="/reviewEdit/:reviewId" element={<ReviewEdit/>}/>
  </Routes>
  }
  
  export default AppView