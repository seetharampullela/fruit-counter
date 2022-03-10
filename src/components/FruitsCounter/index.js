// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => {
      console.log(`Previous value of mango is ${prevState.mangoes}`)
      return {mangoes: prevState.mangoes + 1}
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log(`Previous value of banana is ${prevState.bananas}`)
      return {bananas: prevState.bananas + 1}
    })
  }

  render() {
    const {mangoes} = this.state
    const {bananas} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1>
            Bob ate {mangoes} mangoes {bananas} bananas
          </h1>
          <div className="card-container-2">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>

            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
