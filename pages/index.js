import Head from "next/head"
import MainPage from "../components/MainPage"
import Navbaer from "../components/Navbaer"
import SideBar from "../components/SideBar"

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Pantip - Learn, Share & Fun</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbaer />
      <main className='flex'>
        <section className='w-1/6'>
          <SideBar />
        </section>
        <section className='flex-grow'>
          <MainPage />
        </section>
      </main>
    </div>
  )
}
