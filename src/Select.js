import { Component } from 'react';

class Select extends Component {
    render() {
        return(
            <header id="header">
                <h1 className="animate__animated animate__backInLeft"><span><i className="fas fa-microphone"></i></span> Hello Pod World <span><i className="fas fa-microphone"></i></span></h1>
                <p className="animate__animated animate__backInLeft">What podcast do you feel like listening to today?</p>
                <p className="animate__animated animate__backInLeft">Select your genre and we'll tell you what's trending</p>
                <div>
                    <form className="selections animate__animated animate__backInLeft" aria-label="Choose an option to sort the podcasts by genre">
                        <label htmlFor="genres">
                            <select name="podcasts" id="pods" onChange={this.props.change}>
                                <option value="placeholder">Select a genre</option>
                                <option value="135" aria-label="True Crime">True Crime</option>
                                <option value="77" aria-label="Sports">Sports</option>
                                <option value="68" aria-label="TV and Film">TV and Film</option>
                                <option value="133" aria-label="Comedy">Comedy</option>
                                <option value="99" aria-label="News">News</option>
                            </select>
                        </label>
                    </form>
                </div>
            </header> 
        )
    }
}

export default Select;