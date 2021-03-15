function Options(props) {
    return (
        <div>
            <option value={props.value}>{props.text}</option>
        </div>
    )
}
export default Options;