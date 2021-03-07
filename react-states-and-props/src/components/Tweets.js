import React from 'react'

const Tweets = (props) => (
        <div>
        <section>
            <h1>
                {props.me}
            </h1>
            <Tweet/>
            </section>      
        </div>
    );


export default Tweets
