import React from "react";
import "./sidepanel.css";

const SidePanel = (props) => {

    const powerOffStyle = {
        backgroundColor:"#777710"
    }
    const powerOnStyle = {
        backgroundColor: "#ffdd22"
    }

    const style = props.power
    ? powerOnStyle
    : powerOffStyle

    return(
        <div id="side-panel">
            <div id="side-panel-wrapper">
                <div id="machine-name">
                    DRUM MACHINE 3000 
                </div>
                <div id="display" style={style}>
                    {props.display}
                </div>
                <div id="buttons">
                    <div id="power-wrapper" 
                    onClick={() => {
                    props.togglePower()
                    }}>
                        Power
                        <div class="button-wrapper" style={style}>
                            <div 
                            id="power-button"
                            class="button"
                            style={props.powerStyle}
                            
                            >
                            </div>
                        </div>
                    </div> 
                    <div 
                    id="bank-wrapper"
                    onClick={props.toggleBank}> 
                        <div id="bank">
                            Bank
                        </div>
                        <div class="button-wrapper" style={style}>
                            <div
                            id="bank-button"
                            style={props.bankStyle}
                            class="button"
                            > 
                            </div>
                        </div>
                    </div>
                </div>
                <div id="volume-wrapper">
                    <input
                    type="range" 
                    min="1"
                    max="100"
                    onChange={props.changeVolume}
                    value={props.volumeInput}
                    />
                </div>
            </div>
            <div id="speaker">
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
            </div>
        </div>
    )
}

export default SidePanel;