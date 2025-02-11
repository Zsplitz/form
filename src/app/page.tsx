"use client"

import { useState } from "react";

export default function Home() {
  const [number, setnumber] = useState(0)
  const [msg, setMsg] = useState("börja gissa")
  let random = Math.floor(Math.random() * 100)
  function handlelogic() {
    if (number > random)
      setMsg("Talet är för högt")
    else if (number > random)
      setMsg("talet är för lågt")
    else {
      setMsg("yayyyyyy")
    }
  }
  return (
    <div>
      <h1>gissa talet</h1>
      {msg}
      <input type="number" onChange={(e) => setnumber(parseInt(e.target.value))} />
      <button onClick={handlelogic}>Gissa</button>
    </div>
  );
}
