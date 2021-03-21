function Inputs(props) {
    return (
        <>
            <input type={props.type} placeholder={props.text} name={props.name} onChange={props.event} required/>
        </>
    )
}

export default Inputs;