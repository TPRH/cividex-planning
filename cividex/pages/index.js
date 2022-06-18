import Head from 'next/head'
import Header from '../components/header'
import Form from '../components/form'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>CiviDex App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Hello World from CiviDex</h1>
        <Form />
      </main>
      <Footer />
    </div>
  )
}
