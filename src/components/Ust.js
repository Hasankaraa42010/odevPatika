
import React, { useEffect, useState } from 'react'

export default function Ust({degerEkle, degers}) {
    const [input1, setinput1] = useState({name:"",kontrol:false})
   
    useEffect(() => {
        setinput1({name:""})
    }, [degers])
    const onSubmit1=(e)=>{
        e.preventDefault();
        if (input1.name==="") {
           return alert("İsim veya soyisim boş olamaz")
        }

        degerEkle([...degers,input1]);
    }
    const onChangeSubmit1=(e)=>{
        setinput1({...input1,[e.target.name]:e.target.value})
    }
  return (
    <div >
        <form onSubmit={onSubmit1}>
        <input onChange={onChangeSubmit1} name="name" value={input1.name} className='input' placeholder='What needs to be done?'></input>
            <button className='buton' type='submit'>tıkla</button>
        </form>
            
       
    </div>
  )
}
