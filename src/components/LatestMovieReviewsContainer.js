import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMoveReviewsContainer extends React.Component{

    state ={
        reviews: []
    }

    componentDidMount = async () => {
        let rawReviews = await fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
        + `api-key=${NYT_API_KEY}`)
        let reviews = await rawReviews.json()
        this.setState({
            reviews
        })
    }
    render(){
        return(
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />            
        </div>
        )
    }
}

export default LatestMoveReviewsContainer