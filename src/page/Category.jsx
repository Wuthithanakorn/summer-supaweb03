import React from 'react'
import CategoryContext from '../context/CategoryContext'
import PageB from './text/PageB'

export default function Category() {

  const category = {name:'sport', description:'hahaha'}

  return (
   <>
    <CategoryContext.Provider value={category}>
      <PageB/>
    </CategoryContext.Provider>
   </>
  )
}
