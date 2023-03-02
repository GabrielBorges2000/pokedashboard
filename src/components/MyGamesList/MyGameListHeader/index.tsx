import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { StyledIconLink } from '../../../styles/components/Button/styles';
import { StyledTitle } from '../../../styles/components/Title/styles';

import { StyledMyGameListHeader } from './styles';

export default function MyGameListHeader() {
    return (
        <StyledMyGameListHeader>
            <StyledTitle tag='h3' fontSize='slg' fontWeight={700}> Os mais Jogados</StyledTitle>
            <StyledIconLink>
                <MdArrowForward size={30} />
            </StyledIconLink>
        </StyledMyGameListHeader>
    )
}