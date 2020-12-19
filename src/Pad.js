import React, { useEffect, useState } from "react";
import "./Pad.css"

const Pad = (props) => {

    const [playing, setPlaying] = useState(false);
 
    const playAudio = () => {
        if(props.power){
        const audio = document.getElementById(props.data.keyTrigger);
        audio.currentTime = 0;
        audio.volume = props.volume;
        audio.play();
        props.setCurrentAudio(props.data.id);
        setPlaying(true);
        setTimeout(() => {
            setPlaying(false)
        },100)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    })

    const handleKeyPress = (event) => {
        if(event.keyCode === props.data.keyCode){
            playAudio()
        }
    }

    const padStyleOn = {
        transform : "scale(0.95)",
        boxShadow : "3px 3px 5px 5px #ffdd22, -3px -3px 5px 5px #ffdd22"
    }
    const padStyleOff = {
        transform : "scale(1)",
        boxShadow : "none"
    }

    const padStylePowerOff = {
        backgroundColor: "#777710"
    }
    const padStylePowerOn = {
        backgroundColor: "#ffdd22"
    }

    const style = playing
    ? padStyleOn
    : padStyleOff

    return(
        <div id="pad-wrapper" style={!props.power ? padStylePowerOff : padStylePowerOn}>
            <div
            style={style}
            class="pad"
            id={props.data.id}
            
            onClick={() => {
                playAudio()
                }}
                >
                <audio
                id={props.data.keyTrigger}
                src={props.data.url}
                ></audio>
                {props.data.keyTrigger}
            </div>
        </div>
    )
}

export default Pad;