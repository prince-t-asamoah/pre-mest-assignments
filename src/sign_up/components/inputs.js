function Inputs(props) {
    return (
        <>
            <input type={props.type} placeholder={props.text} name={props.name} required/>
        </>
    )
}

export default Inputs;