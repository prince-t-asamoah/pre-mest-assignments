import Option from './option';

function SelectOption(props) {
    return (
        <div>
            <select name={props.name}>
                <Option value='house' text='House'/>
                <Option value='techno' text='Techno'/>
                <Option value='drumnbass' text='Drum & Bass'/>
            </select>
        </div>
    )
}
export default SelectOption;