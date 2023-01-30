import Head from 'next/head'
import { StyledButton } from '../styles/global/components/Button/styles'
import { StyledParagraph, StyledTitle } from '../styles/global/components/Title/styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <StyledTitle tag='h1' fontSize='lg' fontWeight={400}> PokédashBoard</StyledTitle>
      <StyledParagraph fontSize='lg'>Esté é um app NextJS</StyledParagraph>

      <StyledButton buttonSize='md' buttonStyled='outline' >teste</StyledButton>
    </>
  )
}
