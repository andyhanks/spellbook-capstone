import { useEffect, useState } from "react"
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
    <article className="spells" style={{overflowY:"scroll"}}>
    <h2 className="title">My Spellbook</h2>
    {
        filteredSpells.map(
            (myspell) => {
                return <section className="spell">
                    

                    <header className="spell_name">Spell: {myspell.spell.name}</header>
                    <div className="spell_desc">{myspell.spell.desc}</div>
                    <footer className="spell_component">Components needed to cast: {myspell.spell.components}</footer>
                  
                    <SpellDeleteButton spellId={myspell.id}/>
                </section>
            }
        )
    }
    </article>
 
    </>
}