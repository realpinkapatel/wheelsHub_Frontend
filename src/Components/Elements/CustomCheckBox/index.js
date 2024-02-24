import './index.modul.css'

const CustomChekBox = (props) => {

    return (
        <div className='check-bd'>
            <input
                type="checkBox"
                className={props.className ? props.className : "checkBox-container"}
                value={props.value}
                onClick={props.onClick}
                onChange={props.onChange}
                checked={props.checked}
            />
            <span
                className={props.className ? props.className : "carType-text"}
            >{props.children}</span><br />
        </div>
    )
}

export default CustomChekBox;