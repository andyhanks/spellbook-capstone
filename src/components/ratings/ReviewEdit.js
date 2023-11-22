import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const ReviewEdit = (props) => {
    const [review, assignReview] = useState({})
    const { reviewId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/reviews/${reviewId}`)
            .then(response => response.json())
            .then((data) => {
                assignReview(data)
            })
    }, [])

    const handleControlledInputChange = (e) => {
        const newReviewEntry = {...review}
        newReviewEntry[`${e.target.name}`] = e.target.value
        assignReview(newReviewEntry)
    }

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const entryToSend = {...review}

        return fetch(`http://localhost:8088/reviews/${reviewId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryToSend)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            })
    }


    return <>
        <form className="reviewForm" onSubmit={(clickEvent) => handleSaveButtonClick(clickEvent)}>
            <h2 className="reviewForm__title">{props.spellId}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">What did you think?:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        name="content"
                        className="form-control"
                        placeholder="How do you feel about this particular spell?"
                        value={review.content}
                        onChange={handleControlledInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="rating">Rate Me</label>
                    <select name="rating" onChange={handleControlledInputChange}>
                        <option value="5" >5</option>
                        <option value="4" >4</option>
                        <option value="3" >3</option>
                        <option value="2" >2</option>
                        <option value="1" >1</option>
                    </select>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Edits
            </button>
        </form>
    </>
}