import React from 'react';
import {StyledButtonBackToTop} from './StyledNavContainer.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";

class ButtonBackToTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return <StyledButtonBackToTop title='Back to top' className={this.props.scrollY > (window.innerHeight - (window.innerHeight / 2)) ? 'scroll' : 'scroll hidden'}
      onClick={() => { this.scrollToTop(); }}>
    

           <FontAwesomeIcon
             className="iconFontAwesome--backToTop"
             href="#home"
             icon={faChevronUp}          
                 />

    </StyledButtonBackToTop>;
  }
}

export default ButtonBackToTop;