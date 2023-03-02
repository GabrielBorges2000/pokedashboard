import React from 'react';
import { myGameData } from '../../data/db';
import { StyledGridBox } from '../../styles/components/grid/grid';
import MyGameCard from './MyGameCard';
import MyGameListHeader from './MyGameListHeader';

import { Container, StyledMyGameList } from './styles';

export default function MyGameList() {
    return (
        <StyledGridBox>
            <Container>
                <MyGameListHeader />
                <StyledMyGameList>
                    {
                        myGameData.map((game) => (
                            <MyGameCard key={game.name} game={game} />
                        ))
                    }
                </StyledMyGameList>
            </Container>
        </StyledGridBox>
    )
}