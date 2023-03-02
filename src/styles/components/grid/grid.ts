import styled from 'styled-components';
//import styled from 'styled-components/native';

export const StyledGridBox = styled.div`
    background-color: ${({theme}) => theme.color.white_20};
    border: 1px solid ${({theme}) => theme.color.gray15};
    border-radius: 25px;
    padding: 2rem 2.5rem;

    @media(max-width: 550px){
        padding: 1.5rem;
    }
`;