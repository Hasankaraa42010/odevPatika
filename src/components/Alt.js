import React from 'react'

export default function Alt({degers,setdeger}) {
    
    function arrayRemove() {
        alert("Eminmisin")
        const yeniDizi = degers.filter((item) => item.name===0);
        setdeger(yeniDizi);
      }
  return (

    <div>
        <p id='alt1'> {degers.length} items left</p>
        <p id='alt2' onClick={()=>{arrayRemove()}}>clear all</p>
    </div>
  )
}
