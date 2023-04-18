import React from 'react'
import UserContext from '../context/UserContext'
import PageA from './text/PageA'
import PageB from './text/PageB'

export default function Login() {

  const user = {name: 'Yoyo' , age: '80'}

  return (
    <>
      <UserContext.Provider value={user}>
        <PageA/>
        <PageB/>
      </UserContext.Provider>
    </>
  )
}
