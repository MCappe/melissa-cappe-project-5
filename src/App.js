import './App.css';
import { Component, createRef } from 'react';
import axios from 'axios';
import Podcasts from './Podcasts.js'
import Select from './Select.js';
import image2 from './api-transparent background for white background.png';


class App extends Component {
  constructor() {
    super();
    // Initialize state to keep track of the data coming back from the ListenNotes API
    this.state = {
      podcasts: []
    };
    this.resultsRef = createRef();
  }
  
  getPodcasts (idValue) {
    // API call via axios
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
      // setState to render the podcast information to the page
      this.setState({
        podcasts: response.data.podcasts
      })
      this.executeScroll();
    })
    
    
  }
  
  handleChange = (e) => {
    // onChange event handler to listen for user to select a genre in the select drop down menu
    const podOption = e.target.options[e.target.selectedIndex].value;
    this.getPodcasts(podOption);
    // console.log(podOption);
  }
  
  executeScroll = () => this.resultsRef.current.scrollIntoView()
  
  
  render() {
    return (
      <div className="podPage">
        <div className="wrapper">
          
          <Select 
          change={this.handleChange}/>
          

          <main ref={this.resultsRef}>
          {
            this.state.podcasts.map((pod) => {
              return (
                <Podcasts 
                key={pod.id}
                podImage={pod.image}
                podTitle={pod.title}
                podDescription={pod.website}/>
              )
            })
          }
          </main>

          <div className="backToTop">
            <a href="#header" className="backUp"><i className="fas fa-arrow-up"></i></a>
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

