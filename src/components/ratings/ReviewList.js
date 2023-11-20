import { useEffect, useState } from "react"

import { Link,useNavigate } from "react-router-dom"
import { Logout } from "../nav/Logout"
//state is managed at the component level. Data is fetched from the DOM when a customer submites a ticket then this function stores the state of the ticket and returns an array for the ApplicationViews variable so it can then publish to the webpage.
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
            <Logout/>
          <h2>Spell Ratings and Reviews</h2>
        <article className="reviews">
            {
                reviews.map(
                    (currentReview) => {
                        return <section className="review">
                            <header>Name:{currentReview?.user?.fullName}</header>
                           <div> {currentReview?.spell?.name}</div>
                            <div>Review:{currentReview?.content} </div>
                            <div>Rating: {currentReview?.rating} Stars</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}