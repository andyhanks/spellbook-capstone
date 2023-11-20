import { useState } from "react";
import { MySpellBook } from "./MySpellBook";
import { AllSpellsList } from "../spells/AllSpellsList";
import { ReviewList } from "../ratings/ReviewList";

export const SpellBookContainer = () => {
    const [filteredSpells, setFiltered] = useState([])

    return <> 
    <ReviewList filteredSpells={filteredSpells} setFiltered={setFiltered}/>
    <MySpellBook filteredSpells={filteredSpells} setFiltered={setFiltered}/>
    <AllSpellsList  setFiltered={setFiltered}/>
    </>
}
