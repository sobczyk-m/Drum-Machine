function Switch(props) {

    const switchContainerStyle = {
        width: "80%",
        height: "3.3rem",
        fontSize: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const switchLabelStyle = {
        fontSize: "1em",
        fontWeight: "bold",
        marginBottom: "3px"
    }

    const switchCaseStyle = {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${props.numberOfOptions}, auto)`,
        padding: "4px",
        backgroundColor: "var(--switch-case-bg)",
        borderRadius: "10px"
    }

    const switchStyle = {
        width: "100%",
        height: "100%",
        gridColumn: `${props.selectOption}`,
        backgroundColor: "var(--primary-color)",
        borderRadius: "10px"
    }

    return (
        <div className={"switch-container"} style={switchContainerStyle}>
            <p className={"switch-label"} style={switchLabelStyle}>{props.name}</p>
            <div className={"switch-case"} style={switchCaseStyle}>
                <div className={"switch"} id={props.id} onClick={props.onClick} style={switchStyle}></div>
            </div>
        </div>
    )
}

export default Switch