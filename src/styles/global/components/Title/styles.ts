import styled, { css } from 'styled-components';

import Title from '.';
//import styled from 'styled-components/native';

type Props = {
    opacity?: number;
    fontSize: 'lg' | 'md' | 'sm';
}

export const StyledTitle = styled(Title)`    
    font-weight: ${({fontWeight}) => fontWeight};

    color: ${({theme}) => theme.color.white};

    ${({fontSize}) => {
        switch(fontSize) {
            case 'lg':
                return css`
                    font-size: 44px;
                `
            case 'md': 
                return css`
                    font-size: 20px;
                `
            case 'sm': 
                return css`
                    font-size: 16px;
                `
        }
    }}


`;

export const StyledParagraph = styled.p<Props>`
    font-weight: 400;

    color: ${({ theme }) => theme.color.white};
    
    opacity: ${({ opacity }) => opacity ? opacity : 0.5};

    strong, b {
        font-weight: 700;
    }

    ${({ fontSize }) => {
        switch (fontSize) {
            case 'lg':
                return css`
                    font-size: 20px;
                `
            case 'md':
                return css`
                    font-size: 16px;
                `
            case 'sm':
                return css`
                    font-size: 14px;
                `
        }
    }}
`;