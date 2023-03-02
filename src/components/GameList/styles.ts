import styled from 'styled-components';
//import styled from 'styled-components/native';

export const StyledGameList = styled.section`
    width: 100% ;
    display: flex;
    gap: 1.5rem;

    @media (max-width: 830px) {
        overflow-x: scroll;
        padding-bottom: 1rem;

    }

    ::-webkit-scrollbar {
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.color.red};
        border-radius: 50px;    
    }    
`;