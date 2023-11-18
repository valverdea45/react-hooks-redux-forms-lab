import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandInput({ onBandSubmit }) {

  const [ name, setName ] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onBandSubmit(name)
    setName("")
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>name
        <input name={"name"} type="text" onChange={handleChange} value={name}/>
        </label>
        <button type="submit">add band</button>
      </form>
    </div>
  )
}

export default BandInput;
