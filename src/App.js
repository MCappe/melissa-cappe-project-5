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
    // Initialize scrolling function
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
      // call execute scrolling function
      this.executeScroll();
    })    
    
  }
  
  handleChange = (e) => {
    // onChange event handler to listen for user to select a genre in the select drop down menu
    const podOption = e.target.options[e.target.selectedIndex].value;
    this.getPodcasts(podOption);
  }
  
  // execute scroll function to scroll down to podcasts once option selected from dropdown
  executeScroll = () => this.resultsRef.current.scrollIntoView()
  
  
  render() {
    return (
      <div className="podPage">
        <div className="wrapper">
          
          <Select change={this.handleChange}/>
          
          <main ref={this.resultsRef}>
          {
            // map through podcast options to render to page
            this.state.podcasts.map((pod) => {
              return (
                <Podcasts 
                key={pod.id}
                podImage={pod.image}
                podTitle={pod.title}
                // In the event there is no website for the selected podcast, still make the button clickable, but let the user know there is no website available
                podUrl={pod.website ? pod.website : "No Website available"}/>
              )
            })
          }
          </main>

          <div className="backToTop">
            <a href="#header"><i className="fas fa-arrow-up"></i><span class="srOnly">Scroll back to the top</span></a>
          </div>

        </div>
      <footer>
          <p>© Melissa Cappe for <a href="https://junocollege.com/">Juno College</a></p>
          <img className="listenLogo" src={image2} alt="Listen Notes API logo"/>
      </footer>
    </div>
    )
  }
}


export default App;

// I had originally intended to show the podcast description, but unfortunately the data wasn't consistent for each podcast. A lot of them had incorrect descriptions or HTML elements embedded, which I couldn't remove without regex. As part of my stretch goals, I will be working through this issue to be able to render the description under the title (as well as the url).

