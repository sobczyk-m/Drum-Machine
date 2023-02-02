import {useEffect} from "react"

function Drums(props) {

    function onDrumClick(e) {
        if (props.power === false) return null

        const drum = typeof e == 'string' ?
            document.getElementById(e)
            : document.getElementById(e.target.querySelector("audio").id)

        drum.volume = props.volume
        drum.play()
        props.setDisplay(drum.closest('div').id)
    }

    const handleKeyDown = (e) => {
        switch (e.code) {
            case "KeyQ": {
                onDrumClick("Q")
                break
            }
            case "KeyW": {
                onDrumClick("W")
                break
            }
            case "KeyE": {
                onDrumClick("E")
                break
            }
            case "KeyA": {
                onDrumClick("A")
                break
            }
            case "KeyS": {
                onDrumClick("S")
                break
            }
            case "KeyD": {
                onDrumClick("D")
                break
            }
            case "KeyZ": {
                onDrumClick("Z")
                break
            }
            case "KeyX": {
                onDrumClick("X")
                break
            }
            case "KeyC": {
                onDrumClick("C")
                break
            }
            default:
                break
        }
    }

    useEffect(() => {
        props.power ?
            window.addEventListener('keydown', handleKeyDown)
            : window.removeEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [props.power, props.volume])

    const returnDrumButtons = () => {
        const labels = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

        return Object.entries(props.soundKit[props.pluggedKit]).map((entry, index) => {
            return <div id={entry[0]} key={entry[0]} className={"drum-pad"} onClick={e => onDrumClick(e)}>
                <audio className={"clip"} id={labels[index]} src={entry[1]}></audio>
                {labels[index]}
            </div>
        })
    }

    return (
        <div id={"drums-container"}>
            {returnDrumButtons()}
        </div>
    )
}

export default Drums