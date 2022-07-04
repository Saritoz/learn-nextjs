import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push({
      pathname: '/about',
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn NextJS | Easy FrontEnd</title>
        <meta name="description" content="Learn NextJS + Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/about">
        <a>Go to about page</a>
      </Link>
      <button onClick={handleClick}>About Page</button>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
