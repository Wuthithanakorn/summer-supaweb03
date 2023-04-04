import React from 'react'
import Footer from '../component/Footer'
import NavMenu from '../component/NavMenu'
import { Outlet } from 'react-router-dom'

export default function AppRoot() {
  return (
    <>
        <header>
            <NavMenu/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}
