import { Component } from 'react';

class Select extends Component {
    render() {
        return(
            <header>
                <h1 className="animate__animated animate__backInLeft"><span><i className="fas fa-microphone"></i></span> Hello Pod World <span><i className="fas fa-microphone"></i></span></h1>
                <p className="animate__animated animate__backInLeft">What podcast do you feel like listening to today?</p>
                <p className="animate__animated animate__backInLeft">Select your genre and we'll tell you what's trending.</p>
                <div className="select">
                    <form className="selections animate__animated animate__backInLeft">
                        <label htmlFor="">
                            <select name="podcasts" id="pods" className="select" onChange={this.props.change}>
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
        )
    }
}

export default Select;