import {Component} from 'react'

import './pics.css'

const TattoGalleryList = [
  {
    id: 1,
    ImageDisplayText: 'firstType',
    icon: 'assets/img/gallery/1.jpeg',
  },
  {
    id: 2,
    imageDisplayText: 'SecondType',
    icon: 'assets/img/gallery/2.webp',
  },
  {
    id:3,
    ImageDisplayText: 'ThirdType',
    icon: 'assets/img/gallery/4.jpg',
  },
  {
    id: 4,
    ImageDisplayText: 'FourthType',
    Image: 'assets/img/gallery/4.jpeg',
  },
  {
    id:5,
    ImageDisplayText: 'FifthType',
    icon: 'assets/img/gallery/4.jpeg',
  },
]

class Pics extends Component {
    state = {activeCapitalId:  TattoGalleryList[0].id}
  
    onChangeImage = event => {
      this.setState({activeCapitalId: event.target.value})
    }
  
    getCountry = () => {
      const {activeCapitalId} = this.state
  
      const activeCountryAndCapital =  TattoGalleryList.find(
        eachItem => eachItem.id === activeCapitalId,
      )
      return activeCountryAndCapital.icon
    }
  
    render() {
      const {activeCapitalId} = this.state
      const icon = this.getCountry(activeCapitalId)
  
      return (
        <div className="app-container">
          <div className="capitals-container">
            <h1 className="heading">Tatto Gallery</h1>
            <div className="question-container">
              <select
                className="capital-select"
                onChange={this.onChangeImage}
                value={activeCapitalId}
              >
                {TattoGalleryList.map(eachItem => (
                  <option
                    key={eachItem.id}
                    value={eachItem.id}
                    className="option"
                  >
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="question"></p>
            </div>
            <p className="country">{icon}</p>
          </div>
        </div>
      )
    }
  }
  
  export default Pics;
  