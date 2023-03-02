import Image from 'next/image';
import React from 'react';
import { iMyGame } from '../../../data/db';
import { StyledButton } from '../../../styles/components/Button/styles';
import { StyledParagraph, StyledTitle } from '../../../styles/components/Title/styles';

import {
    Left,
 Right,
 StyledMyGameCard,
} from './styles';

interface iMyGameCardProps {
    game: iMyGame;
}

export default function MyGameCard({ game }: iMyGameCardProps) {
    return (
        <StyledMyGameCard>
            <Left>
                <Image src={game.image} alt={game.name} />
                <div>
                    <StyledTitle tag='h3' fontSize='md' fontWeight={700} >{game.name}</StyledTitle>
                    <StyledParagraph fontSize='lg' >{game.category}</StyledParagraph>
                </div>
            </Left>
            <Right>
                <StyledParagraph fontSize='md' >
                    <strong>25 hours played</strong>
                </StyledParagraph>
                {
                    game.install ? (
                        <StyledButton buttonStyled='solid' buttonSize='sm' >Jogar</StyledButton>
                    ) : (
                        <StyledButton buttonStyled='outline' buttonSize='sm' >Instalar</StyledButton>
                    )
                }
            </Right>

        </StyledMyGameCard>
    )
}