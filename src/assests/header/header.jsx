import tonlogo from '../currency.png';
import './header.css';
import Button from '../button/button';
export default function Header(props){
    return (
        <header className='header'>
            <img src = {props.logo} className='logo'/>
            {
                props.isRegistered ? (
                    <span className = "balance">{props.balance} <img className="ton-icon"src={tonlogo}/></span>
                
                ) : (
                    <div>
                        <Button text="Зарегистрироватся" />
                    </div>
                )
            }
        </header>
    );
}