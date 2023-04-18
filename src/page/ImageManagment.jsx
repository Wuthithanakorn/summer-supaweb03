import React, { useEffect, useState } from 'react'
import supabase from '../config/db';
import './About.css'

const storage_path = 'https://oybwzjvszcpuuzutrrah.supabase.co/storage/v1/object/public/asset/shirt/'

export default function ImageManagment() {

    const [image, setImage] = useState(null)
    const [shirt, setShirt] = useState([])

    async function uploadStorage(e){
        e.preventDefault();
        const { error } = await supabase.storage.from('asset')
                                .upload(`shirt/${image.name}`,image,{
                                    cacheControl:'3600',
                                    upsert: true
                                })
        if (error) console.log(error.message);
        getShirt()
    }

    useEffect(() => {
      async function getShirt() {
        const {data , error } = await supabase.storage.from('asset').list('shirt')
        setShirt(data)
      }
      getShirt()
    }, [])
    

    return (
        <>
            <div className="container-fluid m-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-3 text-center shadow mb-5 bg-body rounded p-5">
                        <div className="mb-3">
                            <label htmlFor="formFile" className='from-label'>
                                ทดสอบการอัพโหลดภาพ
                            </label>
                            <input className='form-control' type="file" id='formFile' accept='image/*'
                             onChange={ e => setImage(e.target.files[0])}/>
                        </div>
                        <button onClick={uploadStorage} className='btn btn-outline-primary'> อัพโหลด</button>
                    </div>
                </div>
                <div className="Row m-3">
                     <div className="col shadow mb-5 bg-body rounded p-3 d-flex">
                        {
                            shirt.map((s,index) => (
                                <img className='img-200' key={index} src={`${storage_path}${s.name}`} alt={s.name} />
                            ))
                        }
                     </div>
                </div>
            </div>
        </>
    )
}
