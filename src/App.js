import './App.css';
import { Component } from 'react';
import axios from 'axios';
import image from './murrayPlaceholder.jpg'
import image2 from './api-transparent background for white background.png';

class App extends Component {
  constructor() {
    super();
    // Initialize state to keep track of the data coming back from the ListenNotes API
    this.state = {
      podcasts: []
    }
  }
  
  getPodcasts (idValue) {
    axios({
      url: 'https://listen-api.listennotes.com/api/v2/best_podcasts/',
      method: 'GET',
      params: {
        'genre_id': idValue
      },
      headers: {
        'X-ListenAPI-Key': '47935c3ff89243c39e091cc561774aa5',
      }
    }).then((response) => {
      console.log(response.data)
    })

  }

  handleChange = (e) => {
    const podOption = e.target.options[e.target.selectedIndex].value;
    this.getPodcasts(podOption);

    console.log(podOption)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="podPage">
        <div className="wrapper">
        <h1>Hello Pod World</h1>
        <form className="selections">
          <label htmlFor="">
            <select name="podcasts" id="pods" className="select" onChange={this.handleChange}>
              <option value="135">True Crime</option>
              <option value="business">Business</option>
              <option value="comedy">Comedy</option>
            </select>
          </label>
        </form>
        <div className="container">
          <ul>
            <li>
              <div className="imageContainer">
                <img src={image} alt="Fill Murray"/>
              </div>
              <div className="podInfo">
                <h2>Title</h2>
                <p>Overview</p>
              </div>
            </li>
          </ul>
        </div>
      
      <div className="moreButton">
        <button>More Titles</button>
      </div>
        </div>
      <footer>
          <p>© Melissa Cappe for <a href="https://junocollege.com/">Juno College</a></p>
          <img className="listenLogo" src={image2} alt="Listen API logo"/>
      </footer>




    </div>
    )
  }
}


export default App;


