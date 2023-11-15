import { useEffect, useState } from "react"
import { Logout } from "../nav/Logout"



export const AllSpellsList = () => {
    const [spells, setSpells] = useState([])
    useEffect(
        () => {
      fetch(` http://localhost:8088/spells`)
      .then(response => response.json())
      .then((spellArray) => {
        setSpells(spellArray)
      })
      
      // View the list of spells
        },
        [] // If this array is empty, You are seeing initial component state
    )

    return <>
    <h2>All D&D Spells</h2>
    <article classname="spells" style={{overflowY:"scroll"}}>
    {
        spells.map(
            (spell) => {
                return <section className="spell">
                    

                    <header>Spell: {spell.name}</header>
                    <div>{spell.desc}</div>
                    <footer>Components needed to cast: {spell.components}</footer>
                   
                </section>
            }
        )
    }
    </article>
    <Logout />
    </>
}