import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"


export const ReviewForm = (props) => {

    const [ params ] = useSearchParams()

    const navigate = useNavigate()
    //gets the activeUser out of login storage
    const localActiveUser = localStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)
    
    const [review, setReview] = useState({
        content:"",
        rating:5, 
        spellId: +params.get("spellId"),
        userId: +activeUserObject.id
    })


            const onChange = (evt, key) => {
                const copy = {...review}
                copy[key] = evt.target.value
                setReview(copy)
                console.log(review)
             }

        // TODO: Perform the fetch() to POST the object to the API
        const saveReview = () => {
            fetch(`http://localhost:8088/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(r => r.json())
            .then( navigate("/"))
    }
            return (
                
                <form className="reviewForm"    onSubmit={(clickEvent) => saveReview(clickEvent)}>
                    <h2 className="reviewForm__title">{props.spellId}</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="description">What did you think?:</label>
                            <textarea
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="How do you feel about this particular spell?"
                                value={review.content}
                                onChange={(e) => onChange(e, "content")}
                                 />
                        </div>
                        <div>
                            <label htmlFor="rating">Rate Me</label>
                            <select onChange ={(e) => onChange(e, "rating")}>
                            <option value="5" >5</option>
                            <option value="4" >4</option>
                            <option value="3" >3</option>
                            <option value="2" >2</option>
                            <option value="1" >1</option>
                            </select>
                        </div>
                    </fieldset>


                    <button
                 
                    className="btn btn-primary" >
                        Submit review
                    </button>
                </form>
            )
    }