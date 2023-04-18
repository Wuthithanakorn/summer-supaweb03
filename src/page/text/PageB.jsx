import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import PageC from './PageC';
import CategoryContext from '../../context/CategoryContext';

export default function PageB() {
 const user = useContext(UserContext);
 const category = useContext(CategoryContext)
  return (
    <>
        <h1>B</h1>
        {JSON.stringify(user)}
        
        {JSON.stringify(category)}
        <PageC/>
    </>
  )
}
