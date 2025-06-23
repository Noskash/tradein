import './button.css';
export default function Button(props){
    return(<button className={`button ${props.className || ''}`}>
        {props.text}
    </button>);
}