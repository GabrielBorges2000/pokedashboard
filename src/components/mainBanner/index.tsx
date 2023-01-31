import Image from 'next/image';
import React from 'react';
import { StyledButton } from '../../styles/components/Button/styles';
import { StyledParagraph, StyledTitle } from '../../styles/components/Title/styles';
import Charizard from '../../assets/Charizard.png'

import {
    StyledBanner, Content, FlexGrid, ImageGrid, PriceBox
} from './styles';
import { StyledTag } from '../../styles/components/Tag/styled';

export default function MainBanner() {
    return (
        <StyledBanner>
            <FlexGrid>
                <Content>
                    <StyledTag backgroundColor='red' >RPG</StyledTag>
                    <StyledTitle tag='h1' fontWeight={400} fontSize='lg'>Lorem Ipsum Pokéworld</StyledTitle>
                    <PriceBox>
                        <StyledParagraph fontSize='md' opacity={1} >R$ <strong>299,00</strong></StyledParagraph>
                        <StyledButton buttonStyled='solid' buttonSize='lg' >Comprar</StyledButton>
                    </PriceBox>
                </Content>
                <ImageGrid>
                    <Image src={Charizard} alt='Dragão Charizars do desenho pokemon' />
                </ImageGrid>
            </FlexGrid>            
        </StyledBanner>
    )
}