import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  showFooter?: boolean
  className?: string
}

const Layout = ({ children, className, showFooter = true, title = 'This is the default title' }: Props) => (
  <div className={`w-screen font-inter bg-orange-100 ${className} `}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main>{children}</main>
    {showFooter && <Footer />}
  </div>
)

export default Layout
