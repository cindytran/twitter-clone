import React from "react"
import PropTypes from "prop-types"
class AddTweet extends React.Component {
  state = {
    newTweet: ''
  }

  handleAddNew = () => {
    this.props.addNew(this.state.newTweet)
    this.setState({
      newTweet: ''
    })
  }
  updateNewTweet = (e) => {
    console.log(e.target.value)
    this.setState({
      newTweet: e.target.value
    })
  }
  render () {
    return (
      <div>
        Add a new tweet:
        <input
         type="text"
         value={this.state.newTweet}
         onChange={this.updateNewTweet}
        />
        <button onClick={this.handleAddNew}>Add Tweet</button>
      </div>
    );
  }
}

AddTweet.propTypes = {
  message: PropTypes.node
};
export default AddTweet
