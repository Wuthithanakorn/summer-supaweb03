import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

export default function PageC() {
    const user = useContext(UserContext)
  return (
    <>
    <h1>C</h1>
    {JSON.stringify(user)}
    </>
  )
}
