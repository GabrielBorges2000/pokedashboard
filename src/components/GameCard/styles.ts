import styled from 'styled-components';
//import styled from 'styled-components/native';

export const StyledGameCard = styled.li`
    min-width: 260px;
    img {
        border-radius: 25px;
    }
    
    h3 {
        margin-top: 1rem;

    }

    @media (max-width: 100px){
        border-radius: 20px;
    }
`;