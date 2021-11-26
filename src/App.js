// create your App component here
import React, {Component} from 'react';
 
export default class App extends Component {

  state = {
    astroPeople: []
  }
  render() {
    return <div>{this.state.astroPeople.map((person) => <li>{person.name}</li>)}</div>
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.people)
      this.setState({
        astroPeople: data.people
      })
    })
  }
}