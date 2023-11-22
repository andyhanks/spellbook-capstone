import { useEffect, useState } from "react"

import { Link,useNavigate } from "react-router-dom"
import { ReviewEdit } from "./ReviewEdit"
//state is managed at the component level. Data is fetched from the DOM when a customer submites a review then this function stores the state of the review and returns an array for the ApplicationViews variable so it can then publish to the webpage.
export const ReviewList = (props) => {
    const [reviews, setReviews] = useState([])
  
    const navigate = useNavigate()




useEffect(
    () => {
        fetch(`http://localhost:8088/reviews?_expand=user&_expand=spell`)
        .then (response => response.json())
        .then((reviewArray) => {
            setReviews(reviewArray)
        })
    },
    []
    )

    
return <>
   
        <article className="reviews" style={{overflowY:"scroll"}}>
          <h1 className="title">Spell Ratings and Reviews</h1>
            {
                reviews.map(
                    (currentReview) => {
                        return <section className="review">

                           <div className="spell_name"> Spell: {currentReview?.spell?.name}</div>
                            <header className="reviewer">Reviewer: {currentReview?.user?.fullName}</header>
                            <div className="spell_desc">Review-{currentReview?.content} </div>
                            <div className="spell_component">Rating: {currentReview?.rating} Dice</div>
                          <button onClick={() => {navigate(`/reviewEdit/${currentReview.id}`)}}>edit</button>
                        </section>
                    }
                )
            }
        </article>
    </>
}