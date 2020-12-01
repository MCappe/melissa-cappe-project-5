import { Component } from 'react';

// class ScrollUp extends Component {
//     render() {
//         return(
//             <div className="backToTop">
//                 <button onClick={this.scrollButton}><i class="fas fa-arrow-up"></i></button>
//             </div>
//         )
//     }
// }

class ReadyToScroll extends Component {
    constructor() {
        super()
        this.myRef = React.createRef()
    }
    // run this method to execute scrolling. 
    executeScroll = () => this.myRef.current.scrollIntoView()
    render() {
        return <main ref={this.myRef}>Element to scroll to</main>
    }
}
export default ReadyToScroll;
