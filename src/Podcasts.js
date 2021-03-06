import { Component } from 'react';

class Podcasts extends Component {
    render() {
        return (
            <div>
                <section>
                    <ul>
                        <li className="container">
                            <div className="imageContainer">
                                <img src={this.props.podImage} alt={this.props.podTitle}/>
                            </div>
                            <div className="podInfo">
                                <h2>{this.props.podTitle}</h2>
                                <a href={this.props.podUrl} target="_blank" rel="noopener noreferrer">Podcast Website</a>
                        
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Podcasts;

