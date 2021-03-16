import styled, {css} from 'styled-components';
import {StyledComponents} from '@styled-icons/simple-icons/StyledComponents'

export const SkillsSection = styled.section`
    min-height: 70vh;
    align-items: center;
    margin-top: 150px;

`;

export const StyledIcon = styled(StyledComponents)`
    color: black;
    font-size: 40px;

`


export const InfoForSkills = styled.p`
   font-size: ${({ theme }) => theme.fontSize.text};
   width: 100%;
   text-align: center;
   color: ${({ theme }) => theme.mainColorGray};
   margin-bottom: 50px;
   
`;

export const ContainerForIcons = styled.div`
    position: relative;
    margin-bottom: 50px;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . ."
        ". . ."
;


 @media (min-width: 564px) {
    display: grid;
    margin-bottom: 100px;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr;
    align-items: start;
    gap: 0px 0px;
    grid-template-areas:
        ". . . ."
        ". . . ."
        ". . . .";
  }


@media (min-width: 1024px) {
    display: grid;
    place-items: center;
    margin-bottom: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr;
    gap: 0px 0px;
    margin-bottom: 100px;
    grid-template-areas:
        ". . . . . ."
        ". . . . . .";
}



`;



export const ContainerForIconsSecondary = styled.section`
 display: grid;
 position: relative;
 place-items: center;
 margin-top: 100px;
 margin-bottom: 50px;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-template-rows: 0.5fr;
 gap: 0px 0px;
 grid-template-areas:
     ". . . .";

    @media (min-width: 1024px) {
    margin-top: 150px;
    width: 70%;
    margin: 0 auto;
    }

`;



export const DescriptionForSkill = styled.p`

  ${props => (props.active ? "" : "display : none")}

  ${props =>
      props.active &&
      css`
      position: absolute;
      text-align: center;
      width: 100%;
      padding: 10px 0 10px 0;
      z-index: 50;
      top: -45px;
      margin-bottom: 60px;
      color: ${({ theme }) => theme.mainColorPastel};

      `};
      @media (min-width: 768px) {
      font-size: 1.7rem;
     }

 
`;

