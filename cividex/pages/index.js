import Head from 'next/head'
import Header from '../components/header'
import LoginForm from '../components/LoginForm'
import Form from '../components/form'
import Footer from '../components/footer'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'


export default function Home() {
  const { user, login } = useAuth();
  const { resources } = useResource();

  return (
    <div>
      <Head>
        <title>CiviDex App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Hello World from CiviDex</h1>
        <LoginForm onLogin={login} />
        <Form />
      </main>
      <Footer />
    </div>
  )
}
