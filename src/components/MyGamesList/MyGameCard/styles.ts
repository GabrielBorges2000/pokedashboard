import styled from 'styled-components';
//import styled from 'styled-components/native';

export const StyledMyGameCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media(max-width: 550px){
        flex-direction: column;
        align-items: flex-start;
    }

`;
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
        width: 85px;
        height: 85px;
        object-fit: cover;
        border-radius: 20px;
    }

`;
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
       min-width: 150px;
    }

    @media(max-width: 850px){
        flex-direction: column;
        gap: 1rem;
    }

    @media(max-width: 550px){
       width: 100%;
       align-items: center;

       button {
        max-width: 420px;
        width: 100%;
       }
    }

    

`;