import Head from 'next/head'
import GameList from '../components/GameList'
import MainBanner from '../components/mainBanner'
import { StyledButton } from '../styles/global/components/Button/styles'
import { StyledParagraph, StyledTitle } from '../styles/global/components/Title/styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <MainBanner />

      <GameList />
    </>
  )
}
