import '../styles/globals.css'
import Link from 'next/Link'

function MyApp({ Component, pageProps }) {
  return (
  <div className='mx-auto my-8 w-9/12'>
    <header className="sticky top-0 z-50">
    <nav className='my-4 center'>
      <ul className=' text-2xl flex flex-row truncate space-x-8'>
        <li className='font-bold hover:underline'>
          <Link href="/">
            <a>Curyte</a>
          </Link>
        </li>
        <li className='hover:underline'>
          <Link href="/learn">
            <a>Learn</a>
          </Link>
        </li>
        <li className='hover:underline'>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    </header>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
