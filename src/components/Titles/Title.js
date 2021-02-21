import React from 'react';
import {StyledTitle} from './StyledTitle.styled'
import ScrollAnimation from 'react-animate-on-scroll';

const Title= ({children}) => {
    return (
        <ScrollAnimation initiallyVisible={false} scrollableParentSelector="#parent" animateIn="animate__wobble">
          <StyledTitle >{children}</StyledTitle>
       </ScrollAnimation>
    )

}


export default Title;