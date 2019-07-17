import React from 'react'
import Star from './Star'

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => 
            <Star key={i}
                  starsSelected={i<starsSelected}
                  onClock={() => onRate(i+1)} />
        )}
        <p>{starsSelected} of {totalStars} starsSelected</p>
    </div>

export default StarRating