import { Component } from 'react';
import image1 from './murrayPlaceholder.jpg'

class Podcasts extends Component {
    render() {

        const { description, image, title } = this.props;

        return (
            <div>
                <ul>
                    <li className="container">
                        <div className="imageContainer">
                            <img src={image1} alt="Fill Murray" />
                        </div>
                        <div className="podInfo">
                            <h2>Title</h2>
                            <p>Overview</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Podcasts;