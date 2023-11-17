import { useEffect, useState } from "react"
import { Logout } from "../nav/Logout"
import { useNavigate } from "react-router-dom"
import { SpellDeleteButton } from "./SpellDelete"



export const MySpellBook = () => {
    const [spells, setSpells] = useState([])
    const [filteredSpells, setFiltered] = useState([])
    const navigate = useNavigate()
    //gets the activeUser out of login storage
    const localActiveUser = localStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)

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

    useEffect(
        () => {
      fetch(`http://localhost:8088/spellBooks?_expand=user&_expand=spell`)
      .then(response => response.json())
      .then((myspell) => {
        const mySpellArray = myspell.filter(userSpell => {
            return userSpell.userId === activeUserObject.id 
        })
        setFiltered(mySpellArray)
      })
      
      // View the list of  my chosen spells
        },
        [] // If this array is empty, You are seeing initial component state
    )

    return <>
    <h2>My Collected Spells</h2>
    <article className="spells" style={{overflowY:"scroll"}}>
    {
        filteredSpells.map(
            (myspell) => {
                return <section className="spell">
                    

                    <header>Spell: {myspell.spell.name}</header>
                    <div>{myspell.spell.desc}</div>
                    {/* <footer>Components needed to cast: {spell.components}</footer> */}
                    <button class="button" id={myspell.spell.id}>Remove From My Spellbook </button>
                    <SpellDeleteButton/>
                </section>
            }
        )
    }
    </article>
    <Logout/>
    </>
}