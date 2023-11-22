import { useState } from "react";
import { MySpellBook } from "./MySpellBook";
import { AllSpellsList } from "../spells/AllSpellsList";
import { ReviewList } from "../ratings/ReviewList";
import { NavBar } from "../nav/NavBar";

export const SpellBookContainer = () => {
    const [filteredSpells, setFiltered] = useState([])

    return <> 
    <header className="navbox"><NavBar/></header>
    <div className="list_container"> <MySpellBook filteredSpells={filteredSpells} setFiltered={setFiltered}/></div>
    <div className="container">
    <div className="list_container2"><ReviewList filteredSpells={filteredSpells} setFiltered={setFiltered}/></div>
    <div className="list_container2"><AllSpellsList  setFiltered={setFiltered}/></div>
    </div>
    </>
}
