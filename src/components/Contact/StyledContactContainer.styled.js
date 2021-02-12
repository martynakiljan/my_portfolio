import styled from 'styled-components';



export const StyledTextForContact = styled.h4`
width: 100%;
text-align: center;
margin-top: 60px;
padding: 5px;
color: ${({ theme }) => theme.mainColorGray};
font-size: ${({ theme }) => theme.fontSize.text};


`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
max-width: 600px;
min-height: 400px;
margin: 0 auto;
padding: 20px 0;
margin-top: 50px;
margin-bottom: 50px;


`;



export const StyledLabel = styled.label`
display: block;
padding: 20px 0 5px;
width: 80%;
font-size: 20px;
font-size: ${({ theme }) => theme.fontSize.text};
color: ${({ theme }) => theme.mainColorGray};


`;
export const StyledInput = styled.input`
    display: block;
    padding: 5px 10px;
    min-width: 80%;
    max-height: 80px;
    border: 2px solid transparent;
    border-bottom: 2px solid #AAA9A9;
    background: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.mainColorGray};

`;
export const StyledTextArea = styled.textarea`
    display: block;
    padding: 5px 10px;
    min-width: 80%;
    max-width: 80%;
    color: ${({ theme }) => theme.mainColorGray};
    border: 2px solid transparent;
    border-bottom: 2px solid #AAA9A9;
    background: none;
    font-size: 1rem;
    font-family: Monospace;

`;
export const StyledAnotherFormContact = styled.div`

   display: flex;
   justify-content: center;
   width: 100%;
   padding: 10px;
   align-items: center;
   padding: 30px;
   height: 100%;
   font-size: ${({ theme }) => theme.fontSize.text};
   


`;

  