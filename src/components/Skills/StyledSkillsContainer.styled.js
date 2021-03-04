import styled, {css} from 'styled-components';
import {StyledComponents} from '@styled-icons/simple-icons/StyledComponents'

    export const SkillsSection = styled.section`
        min-height: 70vh;
        align-items: center;
        padding: 50px;

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
   
`;

export const ContainerForIcons = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
        ". ."
        ". ."
        ". ."
        ". ."
        ". ."
        ". .";
    ;


    @media (min-width: 400px) {
        display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . ."
        ". . ."
  }

    @media (min-width: 564px) {
        display: grid;
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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.5fr 0.5fr;
        gap: 0px 0px;
        grid-template-areas:
            ". . . . . ."
            ". . . . . .";
  }



`;





export const ContainerForIconsSecondary = styled.section`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-template-rows: 0.5fr;
 gap: 0px 0px;
 grid-template-areas:
     ". . . .";

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
      top: -40px;
      margin-bottom: 20px;

      `};

 
`;

