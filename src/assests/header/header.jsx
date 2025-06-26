import tonlogo from '../currency.png';
import './header.css';
import Button from '../button/button';

export default function Header(props) {
    return (
        <header className='header'>
            <img 
                src={props.logo} 
                className='logo' 
                alt="logo"
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/50';
                }}
            />
            {props.isRegistered ? (
                <span className="balance">
                    {props.balance} <img className="ton-icon" src={tonlogo} alt="ton"/>
                </span>
            ) : (
                <div>
                    <Button text="Зарегистрироватся" />
                </div>
            )}
        </header>
    );
}