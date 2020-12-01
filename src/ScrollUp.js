import { Component } from 'react';


class ReadyToScroll extends Component {
    constructor() {
        super()
        this.myRef = createRef()
    }
    // run this method to execute scrolling. 
    executeScroll = () => this.myRef.current.scrollIntoView()
    render() {
        return <main ref={this.myRef}>Element to scroll to</main>
    }
}
export default ReadyToScroll;
