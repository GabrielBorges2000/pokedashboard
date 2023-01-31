import styled, { css } from 'styled-components';
//import styled from 'styled-components/native';

type Props = {
    backgroundColor: 'blue' | 'red';
}

export const StyledTag = styled.span<Props>`
    height: 34px;

    padding: 0 1.5rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 400;

    border-radius: 6px;

    color: ${({theme}) => theme.color.white};

    ${({ backgroundColor, theme }) => {
    switch (backgroundColor) {
            case 'blue':
                return css`
                    background-color: ${theme.color.blue};
                `;
            case 'red':
                return css`
                    background-color: ${theme.color.red};
                `;
        }
    }}
`;