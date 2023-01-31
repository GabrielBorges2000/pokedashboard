import Image from 'next/image';
import React from 'react';

import { iGame } from '../../data/db'
import { StyledParagraph, StyledTitle } from '../../styles/components/Title/styles';

import {
StyledGameCard,
} from './styles';

type Props = {
    game: iGame;
}

export default function GameCard({ game } : Props) {
    return (
        <StyledGameCard key={game.name}>
            <Image src={game.image} alt={game.name} />
            <StyledTitle tag='h3' fontSize='md' fontWeight={700} >{game.name}</StyledTitle>
            <StyledParagraph fontSize='lg' >{game.category}</StyledParagraph>
        </StyledGameCard>
    )
}