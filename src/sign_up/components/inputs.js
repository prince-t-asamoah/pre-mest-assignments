function Inputs(props) {
    return (
        <div className="field">
            <input type={props.type} placeholder={props.name} required/>
        </div>
    )
}

export default Inputs;