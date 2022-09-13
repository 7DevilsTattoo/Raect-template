import React from "react";
import StarsRating from "react-stars-rating";
import "./Rating.css"
class Rating extends React.Component {
  render() {
    return <StarsRating rating={5}  />;
  }
}

export default Rating;