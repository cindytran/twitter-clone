import React from "react"
import PropTypes from "prop-types"
import AddTweet from "./AddTweet"
import Tweet from "./Tweet"

class Tweets extends React.Component {
  state = { tweets: [] }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tweets').then((response) => response.json()).then((tweets)=>this.setState({ tweets }));
  }
  addTweet = (tweet) => {
    fetch('http://localhost:3000/api/v1/tweets', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({ message: tweet })
    }).then((response) => response.json()).then((tweet) =>
      this.setState((state) =>({
        tweets: state.tweets.concat([tweet])
      }))
    );
  }
  render () {
    return (
      <div>
        <AddTweet addNew={this.addTweet} />
        Here are some Tweets:

        { this.state.tweets.map((tweet) => <Tweet key={tweet.id} message={tweet.message} />) }
      </div>
    );
  }
}

export default Tweets
