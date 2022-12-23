import React, { useEffect, useState } from "react";

export default function Orta({ degers, setdegers }) {
  const [kontrol, setKontrol] = useState(true);
  const [items, setitems] = useState(null);
  const tıklasana = (e) => {
    if (e.target.checked === false) {
      // e.target.style.textDecoration='overline';
      setKontrol(true);
    } else {
      setKontrol(false);
    }
  };
  function arrayRemove(name) {
    const yeniDizi = degers.filter((item) => item.name !== name);
    setdegers(yeniDizi);
  }
  const degerDegistirme = (e) => {};
  return (
    <div>
      <div>
        {degers.map((item, key) => (
          <div
            className="items"
            style={{ textDecorationColor: "ActiveBorder" }}
            key={key}
          >
            <div>
              <input onClick={(e) => tıklasana(e)} type={"checkbox"}></input>
              {kontrol ? (
                <b onClick={(e) => degerDegistirme(e)}>{item.name}</b>
              ) : (
                <del>{item.name}</del>
              )}
              <button type="text" onClick={() => arrayRemove(item.name)}>
                x
              </button>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

//
//
