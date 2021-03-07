import React from 'react'
import Tweet from './Tweet'
const Tweets = (props) => {
    const tweets = [{ name: "Misha", tweet: "Raect ughh" },
    { name: 'traversy media', tweet: "whats up guys!" },
    { name: 'weddevsimplified', tweet: "hey guys im simpilified the web" }]
    return (

        <div>
            <section>
                {tweets.map(tweet => (
                    <Tweet name={tweet.name} tweet={tweet.tweet}/>
                ))}
            </section>
        </div>
    )

};


export default Tweets
