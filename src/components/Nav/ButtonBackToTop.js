

import React from 'react';
import {StyledButtonBackToTop} from './StyledNavContainer.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";

class ButtonBackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const { is_visible } = this.state;
    return (
      <>
        {is_visible && (

          <>
              <StyledButtonBackToTop onClick={() => this.scrollToTop()}>
          
              <FontAwesomeIcon
                className="iconFontAwesome--backToTop"
                href="#home"
                icon={faChevronUp}          
                />

             </StyledButtonBackToTop>

          </>
        )}
      </>
 

    )






  }







    // <StyledButtonBackToTop title='Back to top' className={this.props.scrollY > (window.innerHeight - (window.innerHeight / 2)) ? 'scroll' : 'scroll hidden'}
    //   onClick={() => { this.scrollToTop(); }}>
    

    //   <FontAwesomeIcon
    //     className="iconFontAwesome--backToTop"
    //     href="#home"
    //     icon={faChevronUp}          
    //     />

    //   </StyledButtonBackToTop>
    
  
}

export default ButtonBackToTop;