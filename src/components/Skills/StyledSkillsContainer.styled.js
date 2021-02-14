import styled from 'styled-components';


export const SkillsSection = styled.section`
    min-height: 70vh;
    align-items: center;
    padding: 50px;

`;
export const InfoForSkills = styled.p`
   font-size: ${({ theme }) => theme.fontSize.text};
   width: 100%;
   text-align: center;
   color: ${({ theme }) => theme.mainColorGray};
   

`;

export const ContainerForIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 40px;

`;
