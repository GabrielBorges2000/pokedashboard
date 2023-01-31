import Head from 'next/head'
import GameList from '../components/GameList'
import MainBanner from '../components/mainBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>PokedashBoard</title>
      </Head>
      <MainBanner />

      <GameList />
    </>
  )
}
