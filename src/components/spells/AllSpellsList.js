import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ReviewForm } from "../ratings/ReviewForm"




export const AllSpellsList = ({setFiltered}) => {
    const navigate = useNavigate()
    const localActiveUser = localStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)

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
    const addSpellToBook = (event) => {
        const spellToAdd = {
            userId: +activeUserObject.id,
            spellId: +event.target.id
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/spellBooks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(spellToAdd)
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/spellBooks?_expand=user&_expand=spell`)
                .then(response => response.json())
                .then((myspell) => {
                  const mySpellArray = myspell.filter(userSpell => {
                      return userSpell.userId === activeUserObject.id 
                  })
                 setFiltered(mySpellArray)
                })
            })
    }

return <>
    <h2>All D&D Spells</h2>
    <article className="spells" style={{ overflowY: "scroll" }}>
        {
            spells.map(
                (spell) => {
                    return <section className="spell">


                        <header>Spell: {spell.name}</header>
                        {/* <div>{spell.desc}</div> */}
                        {/* <footer>Components needed to cast: {spell.components}</footer> */}
                        <button class="button" id={spell.id} onClick={addSpellToBook}>Add To My Spellbook</button>
                        <button class="button" id={spell.id} onClick={() =>navigate(`/reviewForm?spellId=${spell.id}`)}>Review This Spell</button>

                    </section>
                }
            )
        }
    </article>

</>
}