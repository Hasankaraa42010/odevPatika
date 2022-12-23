import React, { useEffect, useState } from 'react'
import Ust from './Ust'
import Orta from './Orta'
import Alt from './Alt'
export default function Full() {
    const [degers, setdeger] = useState([])
    useEffect(() => {
        console.log(degers);
    }, [degers])
  return (
    <div>
 <h1 >TODOS</h1>
    
    <div className='full'>
       
        <Ust degerEkle={setdeger} degers={degers}/>
        <Orta degers={degers} setdegers={setdeger} />
        <Alt degers={degers} setdeger={setdeger}/>
    </div></div>
  )
}
