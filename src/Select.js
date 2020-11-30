import { Component } from 'react';

class Select extends Component {
    render() {
        return (
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
        )
    }
}

export default Select;