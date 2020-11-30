import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Podcasts from './Podcasts.js'
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
      this.setState({
        podcasts: response.data.podcasts
      })
    })

  }

  handleChange = (e) => {
    const podOption = e.target.options[e.target.selectedIndex].value;
    this.getPodcasts(podOption);
    

    console.log(podOption)
  }

  refresh = () => {
    window.location.reload();
  }

  componentDidMount() {
    
  }

  render() {

    

    return (
      <div className="podPage">
        <div className="wrapper">
          <header>
            <h1>Hello Pod World</h1>
            <p>What podcast do you feel like listening to today?</p>
            <p>Select your genre and we'll tell you what's trending.</p>
            <div className="select">
              <form className="selections">
                <label htmlFor="">
                  <select name="podcasts" id="pods" className="select" onChange={this.handleChange}>
                    <option>Select a genre</option>
                    <option value="135">True Crime</option>
                    <option value="77">Sports</option>
                    <option value="68">TV and Film</option>
                    <option value="133">Comedy</option>
                    <option value="99">News</option>
                  </select>
                </label>
              </form>
            </div>
          </header>
          <Podcasts />

          {
            this.state.podcasts.map((pod) => {
              return (
                <Podcasts 
                key={pod.id}
                podImage={pod.image}
                podTitle={pod.title}
                podDescription={pod.description}/>
              )
            })
          }

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


