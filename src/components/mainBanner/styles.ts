import styled from 'styled-components';
//import styled from 'styled-components/native';

export const StyledBanner = styled.div`
    padding: 1rem;
    border-radius: 32px;
    background: ${({ theme }) => theme.gradient.red};     
    `;

export const FlexGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    @media (max-width: 600px){
        flex-direction: column-reverse;

    }

`;

export const Content = styled.div`
    min-width: unset;
    h1 {
        margin-top: 1rem;

        @media (max-width: 600px){
            margin-top: 0.5rem;
        }
    }

`;

export const PriceBox = styled.div`
    margin-top: 3rem;

    display: inline-flex;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white_20};

    border-radius: 12px;

    p {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 0 1.5rem;
    }

    @media (max-width: 600px){
        margin-top: 2rem;
    }

    @media (max-width: 400px){
        flex-direction: column;

        width: 100%;
        button {
            width: 100%;
        }
    }


`;

export const ImageGrid = styled.div`
    img {
        max-width: 100%;
        height: auto;
    }
    

    img {
        @media (max-width: 600px){
            width: 100%;
            max-width: 335px;
        }
    }
`;
