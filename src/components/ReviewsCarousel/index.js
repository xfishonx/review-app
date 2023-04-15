// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  selectedReview = reviewsList => {
    const {activeReview} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReview
    ]
    return (
      <div className="review-container">
        <h1 className="head">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  onRightClick = () => {
    const {reviewsList} = this.props
    const {activeReview} = this.state

    if (activeReview - reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state

    console.log(activeReview)
    return (
      <div className="bg-container">
        <button
          data-testId="leftArrow"
          type="button"
          className="btn"
          onClick={this.onLeftClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            className="left-arrow"
            alt="left arrow"
          />
        </button>
        {this.selectedReview(reviewsList)}
        <button
          data-testId="rightArrow"
          type="button"
          className="btn"
          onClick={this.onRightClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            className="right-arrow"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
