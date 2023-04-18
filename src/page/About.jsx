import React, { useEffect, useState } from 'react'
import './About.css'
import Boy from '../image/Boy.png'
import facebook from 'bootstrap-icons/icons/facebook.svg'
import supabase from '../config/db'
import fetchImage from '../fetchs/FetchsImage'

const storage_path = 'https://oybwzjvszcpuuzutrrah.supabase.co/storage/v1/object/public/asset/images/'


export default function About() {
  const [city, setCity] = useState(null)
  const [car, setCar] = useState(null)
  const [sports, setSports] = useState([])

  async function showCity() {
    //const { data, error } = await supabase.storage.from('asset')
     //                           .getPublicUrl('images/City.png')
    setCity(()=> fetchImage('asset','images/City.png'))
  }

  useEffect(() => {
    async function showCar(){
      // const {data,error} = await supabase.storage.from('asset')
      //                            .getPublicUrl('images/Car.png')
      setCar(()=> fetchImage('asset','images/Car.png'))
    }
    showCar()
  }, []) 
  
  async function loadAllImage() {
    const {data, error} =await supabase.storage.from('asset')
                              .list('images')
    setSports(data)
  }

  return (
    <>
      <button onClick={loadAllImage}>Get All Images</button>
      <hr />
        {
          sports.map( s => (
            <img className='img-200' src={`${storage_path}${s.name}`} alt={s.name}/>
          ))
        }
      <hr />
      <img className='img-200' src="https://picsum.photos/200?random=1" alt="pic1" />
      <img className='img-200' src="/Car.png" alt="logo" />
      <img className='img-200' src={Boy} alt={Boy} />
      <hr />
      <img className='img-200' src={`${storage_path}football.png`} alt="football" />
      <img className='img-200' src={`${storage_path}Fox.png`} alt="Fox" />
      <hr />
      <button onClick={showCity} > Get one Image</button>
      <hr />
      {city && <img className='img-200' src={city} alt={city} />}
      {car && <img className='img-200' src={car} alt={car} />}  
    </>
  )
}