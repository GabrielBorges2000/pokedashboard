import styled from 'styled-components';
import { theme } from '../../theme';
//import styled from 'styled-components/native';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    padding: 0.6rem;


    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;

export const HeaderForm = styled.form`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    height: 59px;
    background-color: ${({ theme }) => theme.color.white_50};

    padding: 0 1rem;
    gap: 1rem;
    border-radius: 10px;

    button {
        color: ${({ theme }) => theme.color.white_50};
        transition: 0.4s;   
        
        &:hover {
            color:${({ theme }) => theme.color.white};
        }
    }

`;

export const Input = styled.input`
    width: 100%;
    max-width: 373px;
    background-color: transparent;    
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;  
    border: none;    

    font-weight: 700;

    &::placeholder{
        color: ${({ theme }) => theme.color.white_50};
    }    

    @media (max-width: 600px) {
        height: 52px;
    }
`;

export const UserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        object-fit: cover;
    }

    button {
        color: ${({ theme }) => theme.color.white};
        transition: 0.4s;

        &:hover {
            color:${({ theme }) => theme.color.blue};
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        justify-content: flex-end;
    }
`;