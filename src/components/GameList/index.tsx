import React from 'react';
import { gameData } from '../../data/db';
import GameCard from '../GameCard';

import {
StyledGameList,
} from './styles';

export default function GameList() {
    // const newGameData = [...gameData];
    // newGameData.length = 3;

    return (
        <StyledGameList>
            {gameData.map(game => (
                <GameCard game={game} />
            ))}
        </StyledGameList>
    )
}