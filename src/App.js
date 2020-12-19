import React, {useEffect, useState} from "react";
import Pad from "./Pad";
import SidePanel from "./sidepanel";
import bankOne from "./bankOne";
import bankTwo from "./bankTwo";
import "./App.css"

const App = () => {

  const [power, setPower] = useState(true);
  const [currentAudio, setCurrentAudio] = useState("");
  const [volume, setVolume] = useState(0.5);
  const [volumeInput, setVolumeInput] = useState("");
  const [display, setDisplay] = useState("");
  const [currentBank, setCurrentBank] = useState(bankOne)

  useEffect(() => {
    setDisplay("WELCOME")
    setTimeout(() => {
      setDisplay("")
    }, 1000)
  },[])

  const togglePower = () => {
    setPower(!power)
    setDisplay("")
    if(!power){
      setDisplay("WELCOME")
    }
    setTimeout(() => {
      setDisplay("")
    },1500)
  }

  const getCurrentAudio = (id) => {
    if(power){
      setCurrentAudio(id)
      setDisplay(id)
      }
  }

  const changeVolume = (event) => {
    if(power){
      setVolume(event.target.value / 100)
      setVolumeInput(event.target.value)
      setDisplay(`Volume: ${volumeInput}`)
      setTimeout(() => {
        setDisplay("")
      },1000)
    }
  }

  const toggleBank = () => {
    if(power){
      setCurrentBank(currentBank === bankOne ? bankTwo : bankOne);
      if(currentBank === bankOne){
        setDisplay("Smooth Piano Kit")
        }else{
          setDisplay("Heater Kit")
        }
    }
    }

    const buttonStyleLeft = {
      float : "left"
    };
    const buttonStyleRight = {
      float: "right"
    };

    const powerStyle =  power 
    ? buttonStyleRight
    : buttonStyleLeft

    const bankStyle = currentBank === bankOne
    ? buttonStyleLeft
    : buttonStyleRight


  return(
    <div id="page-wrapper">
      <div id="drum-machine-wrapper">
        <div id="name-mobile">
          DRUM MACHINE 3000
        </div>
        <div id="pad-outer">
          {
            currentBank.map((data, i) => {
              return <Pad 
              data={data}
              key={i}
              power={power}
              setCurrentAudio={getCurrentAudio}
              volume={volume}
              />
            })
          }
        </div>
        <div id="side-panel-outer">
          <SidePanel 
          togglePower={togglePower}
          changeVolume={changeVolume}
          volume={volume}
          currentAudio={currentAudio}
          volumeInput={volumeInput}
          display={display}
          toggleBank={toggleBank}
          power={power}
          powerStyle={powerStyle}
          bankStyle={bankStyle}
          />
        </div>
      </div>
    </div>
  )
}

export default App;