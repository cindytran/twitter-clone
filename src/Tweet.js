import React from "react"
import PropTypes from "prop-types"
class Tweet extends React.Component {
  render () {
    return (
      <div>
        Message: {this.props.message}
      </div>
    );
  }
}

Tweet.propTypes = {
  message: PropTypes.node
};
export default Tweet
