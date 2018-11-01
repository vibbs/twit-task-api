import React, {Component}  from 'react';
import Tweet from './Tweet.js'



class TweetsApp extends Component {
    render(){
        return(  
            <div>
                <h3>Tweets List</h3>
                <Tweet></Tweet>
            </div>

        )
    }

}



export default TweetsApp;