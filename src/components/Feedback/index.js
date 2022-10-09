import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBack: false}

  changeFeedBackEmoji = () => {
    this.setState({isFeedBack: true})
  }

  ShowSuggestions = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card-bg-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="ul-card-direction-container">
          {emojis.map(eachItem => (
            <li key={eachItem.id} className="card-li-container">
              <button
                type="button"
                className="btn"
                onClick={this.changeFeedBackEmoji}
              >
                <img
                  src={eachItem.imageUrl}
                  className="image"
                  alt={eachItem.name}
                />
                <br />
                <span className="span">{eachItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  showFeedBack = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="card-bg-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="bg-container">
        {isFeedBack ? this.showFeedBack() : this.ShowSuggestions()}
      </div>
    )
  }
}
export default Feedback
