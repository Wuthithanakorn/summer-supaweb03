import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

export default function PageA() {
const user = useContext(UserContext)
  return (
    <>
        <h1>A</h1>
        { JSON.stringify(user)}
    </>
  )
}
