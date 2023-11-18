import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Band from "./Band"
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {

  const bands = useSelector((state) => state.bands.entities)
  const dispatch = useDispatch()

  const bandsToDisplay = bands.map((band, index) => <Band band={band} key={index}/>)

  function onBandSubmit(input) {
    dispatch(bandAdded(input))
  }

  return (
    <div>
       <BandInput onBandSubmit={onBandSubmit}/>

    <ul>
      {bandsToDisplay}
    </ul>
    </div>
   
  )
}

export default BandsContainer;
