import { useEffect, useState } from "react"
import { Logout } from "../nav/Logout"

import { SpellDeleteButton } from "./SpellDelete"



export const MySpellBook = ({filteredSpells, setFiltered}) => {



    //gets the activeUser out of login storage
    const localActiveUser = localStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)


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
    <h2>My Spellbook</h2>
    <article className="spells" style={{overflowY:"scroll"}}>
    {
        filteredSpells.map(
            (myspell) => {
                return <section className="spell">
                    

                    <header>Spell: {myspell.spell.name}</header>
                    <div>{myspell.spell.desc}</div>
                    {/* <footer>Components needed to cast: {spell.components}</footer> */}
                  
                    <SpellDeleteButton spellId={myspell.id}/>
                </section>
            }
        )
    }
    </article>
    <Logout/>
    </>
}