import { Header } from 'components/Header/Header'
import Loader from 'components/Loader'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
    </div>
  )
}

//Ok