import styled, { css } from 'styled-components';
//import styled from 'styled-components/native';

type Props = {
    buttonSize: 'lg' | 'md' | 'sm'
    buttonStyled: 'solid' | 'outline'
}

export const StyledButton = styled.button<Props>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    font-size: 18px;
    transition: 0.4s;

    border-radius: 12px;
    
    ${({ buttonSize }) => {
        switch (buttonSize) {
            case 'lg':
                return css`
                    padding: 0 2rem;
                    height: 69px;
                `
            case 'md':
                return css`
                    padding: 0 2rem;
                    height: 46px;
                `
            case 'sm':
                return css`
                    padding: 0 2rem;
                    height: 42px;
                `
        }
    }}

    ${({ buttonStyled, theme }) => {
        switch (buttonStyled) {
            case 'solid':
                return css`
                    background-color: ${theme.color.blue};
                    color: ${theme.color.white};
                `
            case 'outline':
                return css`
                    border: 1px solid ${theme.color.blue};
                    background-color: transparent;
                    color: ${theme.color.white};

                    &:hover{
                        background-color: ${theme.color.blue};
                    }
                `
        }
    }}

    &:hover{
        filter: brightness(1.1);
        box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
    }
`;