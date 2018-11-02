import React, {Component}  from 'react';
import Tweets from './Tweets.js'



class TweetsApp extends Component {

    
    render(){
        return(  
            <div>
                <h3>Tweets List</h3>
                <Tweets></Tweets>
            </div>

        )
    }

}



export default TweetsApp;