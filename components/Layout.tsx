import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='w-screen font-inter bg-orange-100 '>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
