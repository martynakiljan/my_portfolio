import styled from 'styled-components';


export const SkillsSection = styled.section`
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px;

`;
export const InfoForSkills = styled.p`
   font-size: ${({ theme }) => theme.fontSize.text};
   width: 100%;
   text-align: center;
   color: ${({ theme }) => theme.mainColorGray};
   

`;
