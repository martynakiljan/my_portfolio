import styled from 'styled-components';


export const FooterSection = styled.footer`
    background-color: #FF9292;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.mainColorGray};
    min-height: 10vh;
`;

export const FooterTitle= styled.p`
font-size: 17px;

@media (max-width: 350px) {
  font-size: 13px;
 }
 
`;