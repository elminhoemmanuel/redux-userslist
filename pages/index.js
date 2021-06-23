import Head from 'next/head'
import CakeContainer from '../components/CakeContainer'

export default function Home() {
  return (
    <div >
        <Head>
          <title>Cakeshop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <CakeContainer />
        </div>
      
    </div>
  )
}
