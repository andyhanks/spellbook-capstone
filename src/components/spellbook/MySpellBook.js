import { useEffect, useState } from "react"
import { Logout } from "../nav/Logout"
import { useNavigate } from "react-router-dom"



export const MySpellBook = () => {
    const [spells, setSpells] = useState([])
    const [filteredSpells, setFiltered] = useState([])
    const navigate = useNavigate()
    //gets the activeUser out of login storage
    const localActiveUser = localStorage.getItem("active_user")
    const activeUserObject = JSON.parse(localActiveUser)

    useEffect(
        () => {
      fetch(` http://localhost:8088/spells`)
      .then(response => response.json())
      .then((spellArray) => {
        const openSpellArray = spellArray.filter(spell => {
            return spell.userId === activeUserObject.id
        })
        setSpells(openSpellArray)
      })
      
      // View the list of spells
        },
        [] // If this array is empty, You are seeing initial component state
    )

    return <>
    <h2>My Collected Spells</h2>
    <article classname="spells" style={{overflowY:"scroll"}}>
    {
        spells.map(
            (spell) => {
                return <section className="spell">
                    

                    <header>Spell: {spell.name}</header>
                    {/* <div>{spell.desc}</div> */}
                    {/* <footer>Components needed to cast: {spell.components}</footer> */}
                    <button class="button">Remove From My Spellbook</button>
                </section>
            }
        )
    }
    </article>
    <Logout />
    </>
}