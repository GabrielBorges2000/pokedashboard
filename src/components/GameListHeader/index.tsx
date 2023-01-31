import React from 'react';
import { StyledIconLink } from '../../styles/components/Button/styles';
import { StyledTitle } from '../../styles/components/Title/styles';
import { StyledGameListHeader } from './styles';
import { MdArrowForward } from 'react-icons/md';

export default function GemeListHeader() {
    return (
        <StyledGameListHeader>
            <StyledTitle tag='h3' fontSize='slg' fontWeight={700}> Os mais Jogados</StyledTitle>
            <StyledIconLink>
                <MdArrowForward size={30} />
            </StyledIconLink>
        </StyledGameListHeader>
    )
}