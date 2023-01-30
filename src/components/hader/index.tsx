import Image from 'next/image';
import React from 'react';
import { MdSearch, MdNotifications } from 'react-icons/md'
import { useTheme } from 'styled-components';
import Avatar from '../../assets/Avatar1.png'
import { StyledHeader, HeaderForm, Input, UserName, } from './styles';

export default function Header() {
    const theme = useTheme();

    return (
        <StyledHeader>
            <HeaderForm action="">
                <button type='submit'>
                    <MdSearch size={30} color={theme.color.white_50} />
                </button>
                <Input type="text" name='search' id='search' placeholder='Buscar...' />
            </HeaderForm>
            <UserName>
                <button>
                    <MdNotifications size={30} color={theme.color.white}  />
                </button>
                <Image src={Avatar} alt='imagem do usuario' width={50} height={50}/>
            </UserName>
        </StyledHeader>
    )
}