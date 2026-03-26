import {useEffect, useState} from "react";
import flavors from "../data/flavors";
import reviews from "../data/reviews"

function MainSection() {
    const[featured, setFeatured] = useState([]);
    const[randomReviews, setRandomReviews] = useState([]);
    const shuffleArray = (array) => {
        return[...array].sort(()=>Math.random() - 0.5);
    };
    useEffect(()=> {
        const shuffledFlavors = shuffleArray(flavors).slice(0, 3);
        setFeatured(shuffledFlavors);
        const shuffledReviews = shuffleArray(reviews).slice(0, 2);
        setRandomReviews(shuffledReviews);
    }, []);
    return (
        <div className="main-section">
            <section>
                <h2>About Us</h2>
                <p>Sweet Scoop Ice Cream is your go-to place for delicious ice cream. Browse flavors, customize your order, and explore seasonal specials.</p>
            </section>
            <section>
                <h2>Featured Flavors</h2>
                <div className="flavor-grid">
                    {featured.map((flavor, index)=> (
                        <div key={index} className="flavor-card">
                            <h4>{flavor.name}</h4>
                            <p>{flavor.description}</p>
                            <p>Price: {flavor.price}</p>
                            <img src={flavor.image} alt={flavor.name}/>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>Customer Reviews</h2>
                {randomReviews.map((review, index)=> (
                    <div key={index}>
                        <p>{review.customerName}</p>
                        <p>{review.review}</p>
                        <p>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default MainSection;