import './App.css'
import {useEffect, useState} from "react"
import Drums from "./Drums"
import SoundKits from "./SoundKits"
import Switch from "./Switch"

function App() {

    const soundKitsKeys = Object.keys(SoundKits)
    const [pluggedKit, setPluggedKit] = useState(0)
    const [power, setPower] = useState(true)
    const [volume, setVolume] = useState(0.4)

    const setDisplay = (text) => {
        document.getElementById("display").innerText = text
    }

    const onKitClick = () => {
        pluggedKit === soundKitsKeys.length - 1 ? setPluggedKit(0) : setPluggedKit(prevState => prevState + 1)
    }

    const onPowerClick = () => {
        setPower(prevState => !prevState)
        power ? setDisplay("POWER OFF") : setDisplay("POWER ON")
    }

    const changeVolume = (e) => {
        setVolume(e.target.value)
        setDisplay("Volume: " + Math.round(e.target.value * 100).toFixed(0))
    }

    useEffect(() => {
        setDisplay(soundKitsKeys[pluggedKit])
    }, [pluggedKit])

    return (
        <div id={"drum-machine"}>
            <Drums setDisplay={setDisplay} pluggedKit={soundKitsKeys[pluggedKit]} volume={volume} soundKit={SoundKits}
                   power={power}/>
            <div id={"settings-container"}>
                <Switch name={"Power"} id={"power"} selectOption={power ? 2 : 1} numberOfOptions={2}
                        onClick={onPowerClick}/>
                <div id={"display"}></div>
                <input max={1} min={0} type={"range"} onChange={event => changeVolume(event)} value={volume} step={0.01}
                       id={"volume"}></input>
                <Switch name={"Kit"} id={"kit"} selectOption={pluggedKit + 1} numberOfOptions={soundKitsKeys.length}
                        onClick={onKitClick}/>
            </div>
        </div>
    )
}

export default App
